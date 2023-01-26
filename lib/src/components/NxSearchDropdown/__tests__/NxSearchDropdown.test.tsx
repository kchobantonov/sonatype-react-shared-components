/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxSearchDropdown, { Props } from '../NxSearchDropdown';
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';
import React, { RefAttributes } from 'react';
import { fireEvent } from '@testing-library/dom';
import { within } from '@testing-library/react';

describe('NxSearchDropdown', function() {
  type PropsWithRef = Props<string | number> & RefAttributes<HTMLDivElement>;
  const minimalProps: Props<string | number> = {
        searchText: '',
        onSearchTextChange: () => {},
        onSearch: () => {},
        matches: [],
        onSelect: () => {}
      },
      renderEl = rtlRenderElement<PropsWithRef>(NxSearchDropdown, minimalProps),
      quickRender = rtlRender(NxSearchDropdown, minimalProps);

  it('adds additional specified classnames', function() {
    const el = renderEl()!;
    const customEl = renderEl({ className: 'foo' });

    expect(customEl).toHaveClass('foo');

    for (const cls of Array.from(el.classList)) {
      expect(customEl).toHaveClass(cls);
    }
  });

  it('adds additional specified attributes', function() {
    const el = renderEl({ id: 'foo', title: 'bar' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('title', 'bar');
  });

  it('adds a specified ref', function() {
    const ref = React.createRef<HTMLDivElement>(),
        renderedEl = renderEl({ ref });

    expect(ref.current).toBe(renderedEl);
  });

  it('has an input field with role="searchbox"', function() {
    const el = quickRender(),
        input = el.getByRole('searchbox');

    expect(input).toBeInTheDocument();
  });

  it('sets the searchText as the value of the input', function() {
    const el = quickRender({ searchText: 'foo' }),
        input = el.getByRole('searchbox');

    expect(input).toHaveAttribute('value', 'foo');
  });

  it('calls onSearchTextChange whenver the input\'s onChange event fires', async function() {
    const onSearchTextChange = jest.fn(),
        el = quickRender({ searchText: '', onSearchTextChange }),
        input = el.getByRole('searchbox');

    expect(onSearchTextChange).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: 'aasd' }});
    expect(onSearchTextChange).toHaveBeenCalledWith('aasd');
  });

  it('calls onSearch whenver the input\'s onChange event fires with a value that differs after trimming, ' +
      'passing the trimmed value', async function() {
    const onSearch = jest.fn(),
        el = quickRender({ searchText: 'foo ', onSearch }),
        input = el.getByRole('searchbox');

    expect(onSearch).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: 'foo' }});
    fireEvent.change(input, { target: { value: ' foo' }});
    fireEvent.change(input, { target: { value: ' foo ' }});
    fireEvent.change(input, { target: { value: 'foo ' }});

    expect(onSearch).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: 'fo ' }});

    expect(onSearch).toHaveBeenCalledWith('fo');
  });

  it('passes the disabled prop to the input and buttons', async function() {
    expect(quickRender().getByRole('searchbox')).not.toBeDisabled();
    expect(quickRender({ disabled: undefined }).getByRole('searchbox')).not.toBeDisabled();
    expect(quickRender({ disabled: null }).getByRole('searchbox')).not.toBeDisabled();
    expect(quickRender({ disabled: false }).getByRole('searchbox')).not.toBeDisabled();

    expect(quickRender({ disabled: true }).getByRole('searchbox')).toBeDisabled();

    expect(quickRender({ disabled: true, matches: [{ id: '1', displayName: '1' }]}).getByRole('searchbox'))
        .toBeDisabled();

    let el = quickRender({ disabled: true, matches: [{ id: '1', displayName: '1' }]});
    expect(el.getByRole('menuitem', { name: /1/i, hidden: true })).toBeDisabled();

    el = quickRender({ disabled: false, matches: [{ id: '1', displayName: '1' }]});
    expect(el.getByRole('menuitem', { name: /1/i, hidden: true })).not.toBeDisabled();
  });

  it('renders dropdown with role="alert" if there are no matching elements', function() {
    const el = quickRender({ searchText: 'foo', matches: []});

    expect(el.getByRole('alert')).toBeInTheDocument();
    expect(el.getByRole('alert')).toHaveTextContent('No Results Found');
  });

  it('renders dropdown with role="menu" if there are matching elements', function() {
    const el = quickRender({ searchText: 'foo', matches: [{ id: '1', displayName: '1' }]});

    expect(el.getByRole('menu')).toBeInTheDocument();
  });

  it('sets aria-hidden to true on the dropdown menu if the searchText is empty or disabled is true', function() {
    expect(quickRender().getByRole('alert', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
    expect(quickRender({ searchText: 'foo', disabled: true }).getByRole('alert', { hidden: true }))
        .toHaveAttribute('aria-hidden', 'true');
    expect(quickRender({ searchText: 'foo', disabled: false }).getByRole('alert'))
        .toHaveAttribute('aria-hidden', 'false');
    expect(quickRender({ searchText: 'foo', disabled: undefined }).getByRole('alert'))
        .toHaveAttribute('aria-hidden', 'false');
    expect(quickRender({ searchText: 'foo', disabled: null }).getByRole('alert'))
        .toHaveAttribute('aria-hidden', 'false');
    expect(quickRender({ searchText: 'foo' }).getByRole('alert'))
        .toHaveAttribute('aria-hidden', 'false');
  });

  it('sets aria-live on the dropdown menu to "polite"', function() {
    expect(quickRender().getByRole('alert', { hidden: true })).toHaveAttribute('aria-live', 'polite');
  });

  it('sets aria-busy on the dropdown menu if loading is true', function() {
    expect(quickRender().getByRole('alert', { hidden: true })).toHaveAttribute('aria-busy', 'false');
    expect(quickRender({ loading: true }).getByRole('alert', { hidden: true })).toHaveAttribute('aria-busy', 'true');
  });

  it('sets the menu role on the dropdown when it contains results', function() {
    expect(quickRender({ searchText: 'asdf', matches: [{ id: 'foo', displayName: 'bar' }] }).getByRole('menu'))
        .toBeInTheDocument();
  });

  it('sets the alert role on the dropdown menu when it is in loading, error, or empty states', function() {
    expect(quickRender({ searchText: 'asdf', matches: [] }).getByRole('alert')).toBeInTheDocument();
    expect(quickRender({ searchText: 'asdf', loading: true }).getByRole('alert')).toBeInTheDocument();

    const dropdownMenu = quickRender({ searchText: 'asdf', error: 'foo' }).getAllByRole('alert')[0];
    expect(dropdownMenu).toBeInTheDocument();

    const errorAlert = within(dropdownMenu).getByRole('alert');
    expect(errorAlert).toBeInTheDocument();
  });

  it('sets an id on the NxDropdownMenu and references it in the search boxes aria-controls', function() {
    const el = quickRender({ searchText: 'foo' }),
        filterInput = el.getByRole('searchbox'),
        dropdown = el.getByRole('alert');

    expect(dropdown).toHaveAttribute('id');
    expect(filterInput).toHaveAttribute('aria-controls', dropdown.getAttribute('id'));
  });

  it('sets aria-haspopup on the filter input', function() {
    const el = quickRender({ searchText: 'foo' }),
        filterInput = el.getByRole('searchbox');

    expect(filterInput).toHaveAttribute('aria-haspopup', 'menu');
  });

  it('renders an NxLoadWrapper within the dropdown menu', function() {
    expect(quickRender({ searchText: 'foo', loading: true }).getByRole('status')).toBeInTheDocument();
  });

  it('shows loading text when loading prop is true', function() {
    const el = quickRender({ searchText: 'foo', loading: true });

    expect(el.getByRole('status')).toHaveTextContent('Loading…');
  });

  it('shows error text when the error prop is provided', function() {
    const el = quickRender({ searchText: 'foo', error: 'bar' });

    const dropdownMenu = el.getAllByRole('alert')[0];
    expect(within(dropdownMenu).getByRole('alert')).toHaveTextContent('bar');
  });

  it('fires onSearch with the searchText when the load wrappers retryHandler is triggered', async function() {
    const onSearch = jest.fn(),
        user = userEvent.setup(),
        error = quickRender({ searchText: 'foo', error: 'bar', onSearch });

    expect(onSearch).not.toHaveBeenCalled();

    const retryButton = error.getByRole('button', { name: 'Retry' });

    await user.click(retryButton);

    expect(onSearch).toHaveBeenCalledWith('foo');
  });

  it('sets the load wrapper contents to buttons with type "button" for each match', function() {
    const matches = [
          { id: '1', displayName: 'One' },
          { id: '2', displayName: 'Two' }
        ],
        el = quickRender({ matches, searchText: 'foo' }),
        dropdown = el.getByRole('menu');

    expect(dropdown.children.length).toBe(2);
    expect(within(dropdown).getByRole('menuitem', { name: 'One' })).toHaveAttribute('type', 'button');
    expect(within(dropdown).getByRole('menuitem', { name: 'Two' })).toHaveAttribute('type', 'button');
  });

  it('sets an onClick handler on the menu button that fires onSelect with the match object', async function() {
    const onSelect = jest.fn().mockImplementation((_, evt) => { evt.persist(); }),
        matches = [
          { id: '1', displayName: 'One' },
          { id: '2', displayName: 'Two' }
        ],
        user = userEvent.setup(),
        el = quickRender({ matches, onSelect, searchText: 'foo' });

    expect(onSelect).not.toHaveBeenCalled();

    const menuItem = el.getByRole('menuitem', { name: 'Two' });

    await user.click(menuItem);

    expect(onSelect).toHaveBeenCalledWith(
        { id: '2', displayName: 'Two' },
        expect.objectContaining({ target: menuItem })
    );
  });

  it('sets the load wrapper contents to an empty message if there are no results', function() {
    const el = quickRender({ searchText: 'foo' });

    expect(el.getByRole('alert')).toHaveTextContent('No Results Found');
  });

  it('sets the empty message from the emptyMessage prop', function() {
    const el = quickRender({ searchText: 'foo', emptyMessage: 'asdfasdf' });

    expect(el.getByRole('alert')).toHaveTextContent('asdfasdf');
  });

  it('calls onSearch with the current trimmed searchText if focus enters the component from elsewhere on the page ' +
      'while there is an error', function() {
    const onSearch = jest.fn(),
        el = quickRender({ searchText: 'foo ', error: 'bar', onSearch }),
        input = el.getByRole('searchbox');

    const anotherElement = document.createElement('button');
    document.body.append(anotherElement);
    anotherElement.focus();

    expect(onSearch).not.toHaveBeenCalled();

    input.focus();

    expect(onSearch).toHaveBeenCalledWith('foo');

    anotherElement.remove();
  });

  it('does not call onSearch if focus moves within the component while there is an error', function() {
    const onSearch = jest.fn(),
        props = { searchText: 'foo', onSearch },
        el = quickRender(props),
        filterInput = el.getByRole('searchbox');

    expect(onSearch).not.toHaveBeenCalled();

    // get focus into the component before we set the error
    filterInput.focus();
    expect(onSearch).not.toHaveBeenCalled();

    el.rerender(<NxSearchDropdown { ...minimalProps } { ...props} error={'err'} />);
    expect(onSearch).not.toHaveBeenCalled();

    const retryButton = el.getByRole('button', { name: /retry/i });
    retryButton.focus();
    expect(onSearch).not.toHaveBeenCalled();

    filterInput.focus();
    expect(onSearch).not.toHaveBeenCalled();
  });

  it('does not call onSearch if focus moves into the component from an outside window while there is an error',
      function() {
        const onSearch = jest.fn(),
            el = quickRender({ searchText: 'foo', onSearch }),
            filterInput = el.getByRole('searchbox');

        expect(onSearch).not.toHaveBeenCalled();

        // get focus into the component before we set the error
        filterInput.focus();
        expect(onSearch).not.toHaveBeenCalled();

        el.rerender(<NxSearchDropdown { ...minimalProps } error={'err'} />);
        expect(onSearch).not.toHaveBeenCalled();

        (document.activeElement! as HTMLElement).blur();
        expect(onSearch).not.toHaveBeenCalled();

        filterInput.focus();
        expect(onSearch).not.toHaveBeenCalled();
      }
  );

  it('should clear search when Escape key is pressed on filterInput or dropdownMenu', async function() {
    const matches = [
      { id: '1', displayName: 'One' },
      { id: '2', displayName: 'OneTwo' }
    ];

    const onSearchTextChange = jest.fn(),
        el = quickRender({ searchText: 'One', matches, onSearchTextChange }),
        filterInput = el.getByRole('searchbox'),
        dropdownMenu = el.getByRole('menu'),
        user = userEvent.setup();

    expect(onSearchTextChange).not.toHaveBeenCalled();

    filterInput.focus();
    await user.keyboard('{Escape}');

    expect(onSearchTextChange).toHaveBeenCalledWith('');

    onSearchTextChange.mockClear();

    dropdownMenu.focus();
    await user.keyboard('{Escape}');

    expect(onSearchTextChange).toHaveBeenCalledWith('');
  });
});
