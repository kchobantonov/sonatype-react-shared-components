/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, FormEvent } from 'react';
import { always } from 'ramda';
import classnames from 'classnames';

import NxLoadWrapper from '../NxLoadWrapper/NxLoadWrapper';
import NxLoadError from '../NxLoadError/NxLoadError';
import NxButton from '../NxButton/NxButton';
import NxSubmitMask from '../NxSubmitMask/NxSubmitMask';

import { Props, propTypes } from './types';
import { FormPristineContext } from './contexts';
import { getFirstValidationError, hasValidationErrors } from '../../util/validationUtil';

const NxForm = forwardRef<HTMLFormElement, Props>(
    function NxForm(props, ref) {
      const {
            className,
            loading,
            doLoad,
            onSubmit: onSubmitProp,
            onCancel,
            loadError,
            submitError,
            submitErrorTitleMessage,
            validationErrors,
            submitBtnClasses: submitBtnClassesProp,
            submitBtnText,
            submitMaskState,
            submitMaskMessage,
            submitMaskSuccessMessage,
            children,
            additionalFooterBtns,
            isPristine,
            ...formAttrs
          } = props,
          formClasses = classnames('nx-form', className),
          getChildren = children instanceof Function ? children : always(children),
          submitBtnClasses = classnames('nx-form__submit-btn', submitBtnClassesProp),
          formHasValidationErrors = hasValidationErrors(validationErrors);

      if (isPristine == null) {
        throw new Error('isPristine is strictly required!');
      }

      function onSubmit(evt: FormEvent) {
        evt.preventDefault();

        onSubmitProp();
      }

      const renderForm = () => {
        return (
          <form ref={ref} className={formClasses} onSubmit={onSubmit} { ...formAttrs }>
            <FormPristineContext.Provider value={isPristine || true}>
              {getChildren()}
              <footer className="nx-footer">
                { submitError &&
                  <NxLoadError titleMessage={submitErrorTitleMessage || 'An error occurred saving data.'}
                               error={submitError}
                               retryHandler={onSubmitProp} />
                }
                { !submitError && formHasValidationErrors && !isPristine &&
                  <NxLoadError titleMessage="There were validation errors."
                               error={getFirstValidationError(validationErrors)}
                               retryHandler={onSubmitProp} />
                }
                <div className="nx-btn-bar">
                  { additionalFooterBtns }
                  { onCancel &&
                    <NxButton type="button" onClick={onCancel} className="nx-form__cancel-btn">
                      Cancel
                    </NxButton>
                  }
                  { !!submitError || (formHasValidationErrors && !isPristine) ||
                    <NxButton variant="primary" className={submitBtnClasses}>
                      {submitBtnText || 'Submit'}
                    </NxButton>
                  }
                </div>

              </footer>
            </FormPristineContext.Provider>
            { submitMaskState != null &&
              <NxSubmitMask success={submitMaskState}
                            message={submitMaskMessage}
                            successMessage={submitMaskSuccessMessage} />
            }
          </form>
        );
      };

      return doLoad ? (
        <NxLoadWrapper loading={loading} error={loadError} retryHandler={doLoad}>
          {renderForm}
        </NxLoadWrapper>
      ) : renderForm();
    }
);

NxForm.propTypes = propTypes;

export default NxForm;
export { Props, propTypes };
