export const badge = {
  "& .MuiBadge-badge": {
    aspectRatio: "1",
    height: "fit-content",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "5px",
    borderRadius: "100%",
  },
};

export const hero = {
  paddingTop: "30px",
  backgroundColor: "primary.main",
  display: "flex",
  flexDirection: { xs: "column", sm: "row-reverse" },
  justifyContent: "center",
  alignItems: "center",
  position: { xs: "relative", sm: "absolute" },
  top: { sm: 0 },
  right: { sm: 0 },
  zIndex: { sm: 3 },
  gap: { sm: "10px" },
  paddingRight: { sm: "24px" },

  "&:before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "white",
    clipPath: {
      xs: "polygon(100% 10%, 100% 100%, 0 100%, 0 70%)",
      sm: "unset",
    },
  },
};

export const avatar = {
  backgroundColor: "secondary.main",
  width: 130,
  height: 130,
};

export const listItem = { textAlign: { xs: "center", sm: "right" }, margin: 0 };

export const username = {
  fontWeight: "bold",
  fontSize: "1.3rem",
  color: "black",
  lineHeight: "100%",
  marginBlock: "10px",
  paddingRight: { sm: "unset" },
};
