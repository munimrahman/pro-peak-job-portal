/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';

function FilterOption({ name, value, action, isChecked }) {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between my-3">
            <label className="flex justify-start items-center cursor-pointer">
                <input
                    onChange={(e) =>
                        dispatch(action({ value: value || name, check: e.target.checked }))
                    }
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-xs"
                    checked={isChecked}
                />
                <span className="ml-2 text-accent">{name}</span>
            </label>
        </div>
    );
}

export default FilterOption;
