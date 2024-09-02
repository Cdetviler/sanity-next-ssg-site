import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Stack from "@/components/Stack/Stack";
import Box from "@/components/Box/Box";

export default function Home() {
  return (
    <main>
      <Box color="neutral" rounding="square" padding="xs">
        <Stack>
          <Button color="primary" hierarchy="contained" size="md"> Primary Contained </Button>
          <Button color="primary" hierarchy="outlined" size="md"> Primary Outlined </Button>
          <Button color="primary" hierarchy="ghost" size="md"> Primary Ghost </Button>
          <Button color="secondary" hierarchy="contained" size="md"> Secondary Contained </Button>
          <Button color="secondary" hierarchy="outlined" size="md"> Secondary Outlined </Button>
          <Button color="secondary" hierarchy="ghost" size="md"> Secondary Ghost </Button>
          <Button color="tertiary" hierarchy="contained" size="md"> Tertiary Contained </Button>
          <Button color="tertiary" hierarchy="outlined" size="md"> Tertiary Outlined </Button>
          <Button color="tertiary" hierarchy="ghost" size="md"> Tertiary Ghost </Button>
        </Stack>
      </Box>
      <Box color="neutral" hierarchy="ghost" padding="md">
        <Stack>
          <Box height="sm">
            <Stack>
              <Button color="secondary"> test </Button>
            </Stack>
          </Box>
          <Box color="secondary" hierarchy="outlined" height="sm" />
        </Stack>
      </Box>
    </main>
  );
}
