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
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "white",
    clipPath: "polygon(100% 10%, 100% 100%, 0 100%, 0 70%)",
  },
};

export const avatar = {
  backgroundColor: "secondary.main",
  width: 130,
  height: 130,
};

export const listItem = { textAlign: "center", margin: 0 };

export const username = {
  fontWeight: "bold",
  fontSize: "1.3rem",
  color: "black",
  lineHeight: "100%",
  marginBlock: "10px",
};
