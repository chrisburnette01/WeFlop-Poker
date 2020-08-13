import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalBase, Divider } from '../';
import { Line } from '../../../../components';
import Checkbox from './CheckboxSettings';

interface SettingsProps {
    className?: string;
}

const Settings = ({ className }: SettingsProps) => {
    const [isActive, setIsActive] = useState({ autoMuck: false, music: true, sounds: false });

    const checkboxHandler = (name) => {
        setIsActive((prev) => ({
            ...prev,
            [name]: !isActive[name],
        }));
    };
    return (
        <ModalBase>
            <div className={className}>
                <Line width="long" color="yellow" wrapperClassName="line-short" />
                <Divider margin="6px" />
                <Line width="long" color="yellow" wrapperClassName="line-long" />
                <Divider margin="6px" />
                <div className="checkboxes-wrapper">
                    <Checkbox
                        title="AUTO-MUCK ALL HANDS"
                        active={isActive.autoMuck}
                        onClick={() => checkboxHandler('autoMuck')}
                    />
                    <Checkbox title="MUSIC" active={isActive.music} onClick={() => checkboxHandler('music')} />
                    <Checkbox title="GAME SOUNDS" active={isActive.sounds} onClick={() => checkboxHandler('sounds')} />
                </div>
                <Divider margin="6px" />
                <Line width="long" color="yellow" wrapperClassName="line-long" />
                <Divider margin="6px" />
                <Line width="long" color="yellow" wrapperClassName="line-short" />
            </div>
        </ModalBase>
    );
};

export default styled(Settings)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .line-long {
        flex: 1;
    }
    .line-short {
        height: 24px !important;
    }
    .checkboxes-wrapper {
        margin-right: 220px;
    }
`;
