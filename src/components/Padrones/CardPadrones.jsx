/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const CardPadrones = ({ title, color, responsable, data }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <CardHeader
          style={{ backgroundColor: `${color}`, textAlign: "center" }}
          title={title}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            Responsable<br></br>
          </Typography>
          <Typography variant="body2" color="text.secondary" padding={2}>
            {responsable}
          </Typography>
          <div className="mt-3">
            {data?.map((item, index) => (
              <div key={index}>
                <Typography variant="body1" color="text.secondary" className="mt-2">
                  {item.padrones}
                  <br></br>
                </Typography>
                <a href={item.links} target="_blank" rel="noopener noreferrer">
                  <LaunchIcon />
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardPadrones;
