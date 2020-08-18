import React, { useState } from 'react';
import { Divider } from '../';
import { NavButton } from '../../components';
import styled from 'styled-components';

interface ActionMenuProps {
    className?: string;
    type: 'fold' | 'check-fold' | 'muck';
}

interface CheckboxProps {
    active: boolean;
}
const Checkbox = styled.div<CheckboxProps>`
    cursor: pointer;
    height: 16px;
    width: 24px;
    border-radius: 2px;
    background: ${({ theme, active }) => (active ? theme.palette.yellow : theme.palette.initial)};
    transition: background-color 0.4s ease-in-out;
    &:hover {
        background: ${({ theme }) => theme.palette.yellow};
    }
`;

interface ActionMenuBaseProps {
    type: 'fold' | 'check-fold' | 'muck';
}

const ActionMenuBase = styled.div<ActionMenuBaseProps>`
    .button-hor {
        margin-bottom: ${({ type }) => (type === 'muck' ? '24px' : '8px')};
    }
`;

const ActionMenu = ({ className, type }: ActionMenuProps) => {
    const [active, setActive] = useState('default');
    return (
        <ActionMenuBase type={type}>
            <Divider
                topContent={
                    type === 'muck' ? undefined : (
                        <Checkbox active={active === 'default'} onClick={() => setActive('default')} />
                    )
                }
                leftContent={
                    <NavButton
                        align="right"
                        title={type === 'fold' ? 'fold' : type === 'check-fold' ? 'check/fold' : 'muck'}
                        noMargin
                        className="button-hor"
                        active={active === 'fold'}
                        onClick={() =>
                            setActive(type === 'fold' ? 'fold' : type === 'check-fold' ? 'check/fold' : 'muck')
                        }
                    />
                }
                rightContent={
                    <NavButton
                        align="left"
                        title={type === 'fold' ? 'call any' : type === 'check-fold' ? 'call any' : 'show'}
                        noMargin
                        className="button-hor"
                        active={active === 'call'}
                        onClick={() =>
                            setActive(type === 'fold' ? 'call any' : type === 'check-fold' ? 'call any' : 'show')
                        }
                    />
                }
                className={className}
                lineBottom
            />
        </ActionMenuBase>
    );
};

export default ActionMenu;
