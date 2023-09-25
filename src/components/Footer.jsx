import { Box, Stack, Tooltip, Typography, useTheme, Link } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box mt="80px" backgroundColor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <Typography variant="h5" color="">
          Made By

        <Tooltip title="github profile" placement="top"  >
          <Typography variant="span" fontWeight="600" >
            <Link
              href="https://github.com/ahmedyasserdev"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: 'none',
                color :  theme.palette.primaryColor.main,
                ml : "8px",
              }}
              >
              Ahmed Yasser
            </Link>
          </Typography>
        </Tooltip>
        </Typography>

      </Stack>
    </Box>
  );
};

export default Footer;
