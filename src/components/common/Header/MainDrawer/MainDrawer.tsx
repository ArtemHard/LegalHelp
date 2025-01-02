import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import { FC } from "react";

export const MainDrawer: FC<IProps> = ({
  open,
  items,
  handleOpenDrawer,
  scrollToElement,
}) => {
  const { palette } = useTheme();

  const handleClick = (id: string) => {
    scrollToElement(id);
    handleOpenDrawer();
  };
  return (
    <Drawer anchor={"left"} open={open} onClose={handleOpenDrawer}>
      <Box role='presentation'>
        <List>
          {items.map((item, index) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton onClick={() => handleClick(item.name)}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ color: palette.primary.dark }} />
                  ) : (
                    <MailIcon sx={{ color: palette.primary.dark }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  color={palette.primary.main}
                  sx={{ color: palette.primary.dark }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

type IProps = {
  open: boolean;
  handleOpenDrawer: () => void;
  scrollToElement: (id: string) => void;
  items: { path: string; name: string }[];
};
