import {
  Avatar,
  Button,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function ListeCandidatures() {
  return (
    <div className="p-10">
      <div className="font-[Sora] mb-4">
        <h1 className="text-white font-[Sora] text-[25px]">Candidature réçu</h1>
        <p className="text-gray-400 font-extralight">
          Voici la liste des candidas qui ont postulé à votre offre
        </p>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 bg-gray-800 p-2">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: 2,
                      mr: 4,
                      bgcolor: "oklch(96.2% 0.044 156.743)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Sora",
                        fontSize: "60px",
                        color: "oklch(62.7% 0.194 149.214)",
                      }}
                    >
                      Y
                    </Typography>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <div className="flex items-center">
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "Sora",
                          fontWeight: "semibold",
                          mr: 4,
                          color: "white",
                        }}
                      >
                        Yves Aimable
                      </Typography>
                    </div>
                  }
                  secondary={
                    <ul className="space-y-1">
                      <li className="mb-3">
                        <Typography
                          variant="p"
                          sx={{
                            fontFamily: "Sora",
                            fontWeight: 100,
                            color: "white",
                          }}
                        >
                          Développeur FullStack
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="p"
                          sx={{
                            fontFamily: "Sora",
                            fontWeight: 100,
                            color: "white",
                          }}
                        >
                          Postule à l' offre : Lead Developpeur
                        </Typography>
                      </li>
                      <li className="space-x-1">
                        <Chip
                          onClick={null}
                          sx={{
                            fontFamily: "Sora",
                            cursor: "pointer",
                            color: "white",
                            background: "none",
                            ":hover": {
                              background: "none",
                              color: "oklch(70.7% 0.165 254.624)",
                              "& .MuiSvgIcon-root": {
                                color: "oklch(70.7% 0.165 254.624)",
                              },
                            },
                            "& .MuiSvgIcon-root": {
                              color: "white",
                            },
                          }}
                          icon={<InfoOutlinedIcon />}
                          label="Détails sur le profil"
                        />
                      </li>
                    </ul>
                  }
                />
              </ListItem>
            </div>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Sora",
                fontWeight: 300,
                borderRadius: 50,
                textTransform: "inherit",
              }}
            >
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
