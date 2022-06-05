import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Box } from "@mui/material";

const InputSearchBase = styled(InputBase)`
  width: 100%;
  padding-left: 10px;
  font-size: ;
`;

const search = () => {
  return (
    <Box className="bg-white  w-4/12 ml-12 flex">
      <InputSearchBase placeholder="Search for product,brands and more" />
      <Box className="text-blue-600 p-1">
        <SearchIcon />
      </Box>
    </Box>
  );
};

export default search;
