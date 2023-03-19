import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { berna, blogo} from 'assets'

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={blogo} alt="Refine" width="28px" />
        ) : (
          <img src={berna} alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};