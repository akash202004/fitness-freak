import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  if (!Array.isArray(data)) return null;

  return (
    <div>
      {data.map((item) => (
        <Box
          key={item._id || item}
          itemId={item._id || item}
          title={item._id || item}
          m="0 40px"
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
