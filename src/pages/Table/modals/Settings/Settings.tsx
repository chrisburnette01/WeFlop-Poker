import React, { useState } from 'react';
import styled from 'styled-components';
import { Divider } from '../../layout';
import { Line } from '../../../../components';
import Checkbox from './CheckboxSettings';
import { Container } from '../../../../layout';

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
        <Container type="modal">
            <div className={className}>
                <Line width="large" color="yellow" wrapperClassName="line-short" />
                <Divider margin="0.6rem" />
                <Line width="large" color="yellow" wrapperClassName="line-long" />
                <Divider margin="0.6rem" />
                <div className="checkboxes-wrapper">
                    <Checkbox
                        title="AUTO-MUCK ALL HANDS"
                        active={isActive.autoMuck}
                        onClick={() => checkboxHandler('autoMuck')}
                    />
                    <Checkbox title="MUSIC" active={isActive.music} onClick={() => checkboxHandler('music')} />
                    <Checkbox title="GAME SOUNDS" active={isActive.sounds} onClick={() => checkboxHandler('sounds')} />
                </div>
                <Divider margin="0.6rem" />
                <Line width="large" color="yellow" wrapperClassName="line-long" />
                <Divider margin="0.6rem" />
                <Line width="large" color="yellow" wrapperClassName="line-short" />
            </div>
        </Container>
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
        height: 2.4rem !important;
    }
    .checkboxes-wrapper {
        margin-right: 22rem;
    }
`;
