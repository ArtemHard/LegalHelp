import { FC } from "react";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import {
  StyledCardImage,
  StyledServiceCard,
  StyledServiceCardContent,
} from "./styled";

export const ServiceCard: FC<IProps> = ({ text, img }) => {
  return (
    <StyledServiceCard>
      <StyledCardImage image={img} />
      <CardActionArea>
        <StyledServiceCardContent>
          <Typography
            variant={"overline"}
            sx={{
              display: "block",
              textAlign: "center",
              color: "#fff",
              letterSpacing: "3px",
              fontWeight: 200,
              fontSize: 12,
            }}
          >
            {text}
          </Typography>
        </StyledServiceCardContent>
      </CardActionArea>
    </StyledServiceCard>
  );
};

interface IProps {
  text: string;
  img: string;
}
