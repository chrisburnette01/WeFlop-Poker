import React, { useState } from 'react';
import { Divider } from '../';
import { NavButton } from '../../components';
import { Rectangle } from '../../../../components';
import styled from 'styled-components';

interface ActionMenuProps {
    className?: string;
    type: 'fold' | 'check-fold' | 'muck';
}

interface ActionMenuBaseProps {
    type: 'fold' | 'check-fold' | 'muck';
}

const ActionMenuBase = styled.div<ActionMenuBaseProps>`
    .button-hor {
        margin-bottom: ${({ type }) => (type === 'muck' ? '2.4rem' : '0.8rem')};
    }
    .rect-nav {
        cursor: pointer;
        &:hover > span {
            background-color: ${({ theme }) => theme.palette.yellow};
        }
    }
`;

const ActionMenu = ({ className, type }: ActionMenuProps) => {
    const [active, setActive] = useState('default');
    return (
        <ActionMenuBase type={type}>
            <Divider
                topContent={
                    type === 'muck' ? undefined : (
                        <Rectangle
                            className="rect-nav"
                            border="small"
                            color={active === 'default' ? 'yellow' : 'initial'}
                            width="2.4rem"
                            height="large"
                            onClick={() => setActive('default')}
                        />
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
