import {Link} from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import {StyledTypography} from "./copyright.styled";

export const Copyright = (props: any) => {
    return (
        <StyledTypography variant="body2" color="text.secondary" align="center" {...props}>
            <FormattedMessage id="common.copyright.firstSection" />
            <Link color="inherit" href="">
                <FormattedMessage id="common.copyright.link" />
            </Link>
            <FormattedMessage id="common.copyright.secondSection" values={{
                year: new Date().getFullYear()
            }} />
        </StyledTypography>
    );
}
