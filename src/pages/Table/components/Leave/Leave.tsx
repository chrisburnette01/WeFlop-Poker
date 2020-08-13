import React from 'react';
import styled from 'styled-components';
import { ModalBase, NavButton, Divider } from '../';
import { Typography, Line } from '../../../../components';

interface LeaveProps {
    className?: string;
}

const Leave = ({ className }: LeaveProps) => {
    return (
        <ModalBase>
            <div className={className}>
                <Typography variant="h1" textTransform="uppercase" component="span" color="yellow">
                    ARE YOU SURE?
                </Typography>
                <Divider
                    leftContent={<NavButton align="right" title="no" noMargin />}
                    rightContent={<NavButton align="left" title="yes" noMargin />}
                    className="buttons"
                />
                <Line width="long" color="yellow" wrapperClassName="line-long" />
                <Divider margin="6px" />
                <Line width="long" color="yellow" wrapperClassName="line-short" />
            </div>
        </ModalBase>
    );
};

export default styled(Leave)`
    height: calc(50% + 45px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    .line-long {
        flex: 1;
    }
    .buttons {
        margin: 53px 0 0 2px;
    }
    .line-short {
        height: 24px !important;
    }
`;
