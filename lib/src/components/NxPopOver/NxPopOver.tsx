/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useEffect, KeyboardEvent } from 'react';

import classnames from 'classnames';

import withClass from '../../util/withClass';
// Fix spacings on header

import {
  Props,
  PopOverContextType,
  PopOverHeaderProps,
  PopOverContentProps,
  PopOverFooterProps
} from './types';

import './NxPopOver.scss';

import NxCloseButton from '../NxCloseButton/NxCloseButton';

const PopOverContext = React.createContext<PopOverContextType>({
  onClose: () => {}
});

export const NxPopOverHeader = (props: PopOverHeaderProps) => {
  const { onClose } = React.useContext(PopOverContext);

  const subtitle = props.subtitle ? <h3 className="nx-h3 nx-pop-over-header__subtitle">{props.subtitle}</h3> : null;
  const paragraph = props.paragraph ? <p className="nx-p nx-pop-over-header__paragraph">{props.paragraph}</p> : null;

  return (
    <header className="nx-pop-over-header">
      <NxCloseButton className="nx-pop-over-header__close" type="button" onClick={onClose}>
        Close
      </NxCloseButton>

      <h2 className="nx-h2 nx-pop-over-header__title">
        {props.title}
      </h2>

      {subtitle}
      {paragraph}
    </header>
  );
};

export const NxPopOverContent = (props: PopOverContentProps) => {
  const { children } = props;

  return (
    <div className="nx-pop-over-content">
      {children}
    </div>
  );
};

export const NxPopOverFooter = (props: PopOverFooterProps) => {
  const { children } = props;

  return (
    <footer className="nx-pop-over-footer">
      {children}
    </footer>
  );
};

const useClickOutside = <T extends HTMLElement>(ref: React.RefObject<T>, fn: (e: MouseEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      fn(event);
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, fn]);
};

const _NxPopOver = (props: Props) => {
  const {
    className,
    onClose,
    children,
    ...otherProps
  } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);
  useClickOutside(dialogRef, () => onClose());
  const popOverContextValue = {
    onClose
  };

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  useEffect(() => {
    const handleCancel = () => {
      onClose();
    };
    dialogRef.current?.addEventListener('cancel', handleCancel);
    return () => {
      dialogRef.current?.removeEventListener('cancel', handleCancel);
    };
  }, [onClose]);

  const keyboardListener = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const classes = classnames('nx-pop-over', className);

  return (
    <PopOverContext.Provider value={popOverContextValue}>
      <dialog ref={dialogRef}
              className={classes}
              onKeyDown={keyboardListener}
              aria-modal="true"
              {...otherProps}>
        {children}
      </dialog>
    </PopOverContext.Provider>
  );
};

const NxPopOver = Object.assign(_NxPopOver, {
  Header: NxPopOverHeader,
  Content: withClass('div', 'nx-pop-over-content'),
  Footer: withClass('footer', 'nx-pop-over-footer')
});

export default NxPopOver;

export {Props} from './types';
