import React from 'react';
import styled from 'styled-components';
import { Divider, NavButton } from '../';

const BaseMenu = styled.div`
    .menu-block-left {
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        display: flex;
    }
    .menu-block-right {
        position: absolute;
        flex-direction: column;
        align-items: flex-end;
        display: flex;
    }
    .top-right-menu {
        top: 0;
        right: 0;
        z-index: 6;
    }
    .bottom-left-menu {
        bottom: 0;
        left: 0;
        z-index: 6;
    }
    .top-left-menu {
        top: 0;
        left: 0;
        z-index: 6;
    }
    .bottom-right-menu {
        right: 0;
        bottom: 0;
    }
    .button-middle-margin {
        margin-top: 12px;
        margin-bottom: 12px;
    }
`;

const Menu = ({ navState, setNavState }) => {
    return (
        <BaseMenu>
            <div className="bottom-left-menu menu-block-left">
                <Divider lineLeft />
                <NavButton
                    title="ledger"
                    align="left"
                    active={navState === 'ledger'}
                    onClick={() => setNavState('ledger')}
                />
                <Divider lineLeft />
                <NavButton title="chat" align="left" active={navState === 'chat'} onClick={() => setNavState('chat')} />
                <Divider lineLeft lineBottom />
            </div>
            <div className="top-left-menu menu-block-left">
                <Divider lineLeft lineTop />
                <NavButton title="back to game" align="left" onClick={() => setNavState(null)} />
                <Divider lineLeft />
                <NavButton
                    title="leave"
                    align="left"
                    active={navState === 'leave'}
                    onClick={() => setNavState('leave')}
                />

                <Divider lineLeft />
            </div>
            <div className="menu-block-right top-right-menu">
                <Divider lineRight lineTop />
                <NavButton
                    title="settings"
                    align="right"
                    active={navState === 'settings'}
                    onClick={() => setNavState('settings')}
                />
                <Divider lineRight />
            </div>
            <div className="menu-block-right bottom-right-menu">
                <Divider lineRight />
                <NavButton title="SIT IN" align="right" />
                <NavButton title="SIT OUT NEXT HAND" align="right" className="button-middle-margin" />
                <NavButton title="SIT OUT NEXT BB" align="right" />
                <Divider lineRight lineBottom />
            </div>
        </BaseMenu>
    );
};

export default Menu;
