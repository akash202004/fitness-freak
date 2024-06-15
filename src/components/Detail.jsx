import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import BodyPartImage from "../../public/assets/icons/body-part.png";
import TargetImage from "../../public/assets/icons/target.png";
import EquipmentImage from "../../public/assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        width={800}
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail=image"
      />
      <Stack sx={{ gap: { lg: "35px", sx: "20px" } }}>
        <Typography
          sx={{ fontWeight: "semi-bold", textTransform: "capitalize" }}
          variant="h3"
        >
          {name}
        </Typography>
        <Typography variant="h6">
          Exercise keep you strong. {name} {` `}is one of the best exercise to
          target your {target}. It will improve your mood and gain energy.
        </Typography>
        {extraDetail.map((detail, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={detail.icon}
                alt={detail.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5">{detail.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
