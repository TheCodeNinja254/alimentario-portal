import { grey } from "@mui/material/colors";

export default function componentStyleOverrides(palette) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 200,
          textTransform: "capitalize",
          borderRadius: "4px",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: "5px",
          backgroundColor: grey[200],
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: `12px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: palette.primary.main,
          padding: "24px",
        },
        title: {
          fontSize: "1.125rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: palette.text.secondary,
          paddingTop: "10px",
          paddingBottom: "10px",
          "&.Mui-selected": {
            color: palette.text.primary,
            backgroundColor: palette.background.paper,
            "&:hover": {
              backgroundColor: palette.background.default,
            },
            "& .MuiListItemIcon-root": {
              color: palette.background.paper,
            },
          },
          "&:hover": {
            backgroundColor: palette.background.default,
            color: palette.primary.main,
            "& .MuiListItemIcon-root": {
              color: palette.primary.main,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: palette.text.secondary,
          minWidth: "36px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: palette.primary.secondary,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: palette.primary.dark,
          "&::placeholder": {
            color: palette.text.secondary,
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: grey[500],
          borderRadius: `12px`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[400],
          },
          "&:hover $notchedOutline": {
            borderColor: palette.primary.light,
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: palette.primary.main,
          padding: "15.5px 14px",
          borderRadius: `12px`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `12px`,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: grey[300],
          },
        },
        mark: {
          backgroundColor: palette.background.paper,
          width: "4px",
        },
        valueLabel: {
          color: palette.primary.light,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: grey[500],
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: grey[900],
          background: palette.background.paper,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-deletable .MuiChip-deleteIcon": {
            color: "inherit",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: palette.background.paper,
          background: grey[700],
        },
      },
    },
  };
}
