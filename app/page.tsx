import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Stack from "@/components/Stack/Stack";
import Box from "@/components/Box/Box";

export default function Home() {
  return (
    <main>
      <Box color="neutral" hierarchy="ghost" padding="md">
        <Box hierarchy="ghost" padding="sm">
          <Stack crossDirectionalAlign="flex-start">
            <Stack direction="column">
              <Box height="auto" padding="sm">
                <Stack direction="column">
                  <Button color="secondary"> Secondary </Button>
                  <Button color="secondary" hierarchy="outlined"> secondary ghost </Button>
                  <Button color="secondary" hierarchy="ghost"> secondary ghost </Button>
                </Stack>
              </Box>
              <Box color="primary" hierarchy="ghost" height="auto" padding="sm">
                <Stack direction="column">
                  <Button color="primary"> primary </Button>
                  <Button color="primary" hierarchy="outlined"> primary ghost </Button>
                  <Button color="primary" hierarchy="ghost"> primary ghost </Button>
                </Stack>
              </Box>
            </Stack>
            <Box color="secondary" hierarchy="contained" height="auto" padding="sm">
              <Stack direction="column">
                <Button color="primary"> Secondary </Button>
                <Button color="primary" hierarchy="outlined"> secondary ghost </Button>
                <Button color="primary" hierarchy="ghost"> secondary ghost </Button>
                <Button color="tertiary"> Secondary </Button>
                <Button color="tertiary" hierarchy="outlined"> secondary ghost </Button>
                <Button color="tertiary" hierarchy="ghost"> secondary ghost </Button>
              </Stack>
            </Box>
            <Stack direction="column">
              <Box color="tertiary" hierarchy="contained" height="auto" padding="sm">
                <Stack direction="column">
                  <Button color="secondary"> Secondary </Button>
                  <Button color="secondary" hierarchy="outlined"> secondary ghost </Button>
                  <Button color="secondary" hierarchy="ghost"> secondary ghost </Button>
                </Stack>
              </Box>
              <Box color="tertiary" hierarchy="ghost" height="auto" padding="sm">
                <Stack direction="column">
                  <Button color="tertiary"> tertiary </Button>
                  <Button color="tertiary" hierarchy="outlined"> tertiary ghost </Button>
                  <Button color="tertiary" hierarchy="ghost"> tertiary ghost </Button>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </main>
  );
}
