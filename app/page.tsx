import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Stack from "@/components/Stack/Stack";
import Box from "@/components/Box/Box";
import Heading from "@/components/Heading/Heading";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Icon from "@/components/Icon/Icon";
import TextContent from "@/components/TextContent/TextContent";

export default function Home() {
  return (
    <main>
      <Box hierarchy="ghost" padding="none" width="full" height="sm">
        <BackgroundImage
          paralax="fixed"
          backgroundDarkness="darker"
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="boat in the dessert"
        >
          <Box hierarchy="ghost" padding="sm" height="full">
            <Stack gap="none" direction="column" directionalAlign="center" crossDirectionalAlign="center" containerAlign="center">
              <Heading color="secondary" spacing={false}>Charlie Detviler</Heading>
              <Heading tag="h4" color="neutral-light">Lead Developer</Heading>
            </Stack>
          </Box>
        </BackgroundImage>
      </Box>
      <Box color="neutral" hierarchy="ghost" padding="md">
        
        <Box hierarchy="ghost" padding="sm">
          <Stack crossDirectionalAlign="flex-start">
            <Stack direction="column">
              <Box height="auto" padding="sm">
                <Stack direction="column" crossDirectionalAlign="flex-start">
                  <Button color="secondary"> Secondary <Icon size="md" type="ArrowBigRightDash"/></Button>
                  <Button color="secondary" hierarchy="outlined"> secondary Outlined <Icon size="md" type="ArrowBigRightDash"/></Button>
                  <Button color="secondary" hierarchy="ghost"> secondary ghost <Icon size="md" type="ArrowBigRightDash"/></Button>
                </Stack>
              </Box>
              <Box color="primary" hierarchy="ghost" height="auto" padding="sm">
                <Stack direction="column" crossDirectionalAlign="flex-start">
                  <Button color="primary"> primary </Button>
                  <Button color="primary" hierarchy="outlined"> primary Outlined </Button>
                  <Button color="primary" hierarchy="ghost"> primary ghost </Button>
                </Stack>
              </Box>
            </Stack>
            <Box color="secondary" hierarchy="contained" height="auto" padding="sm">
              <Stack direction="column">
                <Button color="primary"> Secondary </Button>
                <Button color="primary" hierarchy="outlined"> secondary outlined </Button>
                <Button color="primary" hierarchy="ghost"> secondary ghost </Button>
                <Button color="tertiary"> tertiary </Button>
                <Button color="tertiary" hierarchy="outlined"> tertiary outlined </Button>
                <Button color="tertiary" hierarchy="ghost"> tertiary ghost </Button>
              </Stack>
            </Box>
            <Stack direction="column">
              <Box color="tertiary" hierarchy="contained" height="auto" padding="sm">
                <Stack direction="column"  crossDirectionalAlign="flex-end">
                  <Button color="secondary"> Secondary </Button>
                  <Button color="secondary" hierarchy="outlined"> secondary ghost </Button>
                  <Button color="secondary" hierarchy="ghost"> secondary ghost </Button>
                </Stack>
              </Box>
              <Box color="tertiary" hierarchy="ghost" height="auto" padding="sm">
                <Stack direction="column" crossDirectionalAlign="flex-end">
                  <Button color="tertiary"> tertiary </Button>
                  <Button color="tertiary" hierarchy="outlined"> tertiary outlined </Button>
                  <Button color="tertiary" hierarchy="ghost"> tertiary ghost </Button>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box hierarchy="ghost" padding="sm">
          <Stack crossDirectionalAlign="stretch">
            <Box hierarchy="ghost" padding="sm" height="auto">
              <Heading>Heading 1 Primary</Heading>
              <Heading tag="h2">Heading 2 Primary</Heading>
              <Heading tag="h3">Heading 3 Primary</Heading>
              <Heading tag="h4">Heading 4 Primary</Heading>
              <Heading tag="h5">Heading 5 Primary</Heading>
              <Heading tag="h6">Heading 6 Primary</Heading>
            </Box>
            <Box color="tertiary" padding="sm" height="auto">
              <Heading textAlign="center" color="secondary">Heading 1 Secondary</Heading>
              <Heading textAlign="center" color="secondary" tag="h2">Heading 2 Secondary</Heading>
              <Heading textAlign="center" color="secondary" tag="h3">Heading 3 Secondary</Heading>
              <Heading textAlign="center" color="secondary" tag="h4">Heading 4 Secondary</Heading>
              <Heading textAlign="center" color="secondary" tag="h5">Heading 5 Secondary</Heading>
              <Heading textAlign="center" color="secondary" tag="h6">Heading 6 Secondary</Heading>
            </Box>
            <Box color="secondary" padding="sm" height="auto">
              <Heading textAlign="right" color="tertiary">Heading 1 Tertiary</Heading>
              <Heading textAlign="right" color="tertiary" tag="h2">Heading 2 Tertiary</Heading>
              <Heading textAlign="right" color="tertiary" tag="h3">Heading 3 Tertiary</Heading>
              <Heading textAlign="right" color="tertiary" tag="h4">Heading 4 Tertiary</Heading>
              <Heading textAlign="right" color="tertiary" tag="h5">Heading 5 Tertiary</Heading>
              <Heading textAlign="right" color="tertiary" tag="h6">Heading 6 Tertiary</Heading>
            </Box>
          </Stack>
        </Box>
        <Box hierarchy="ghost" padding="sm">
          <Stack crossDirectionalAlign="flex-start">
            <Box color="primary" padding="sm" height="auto">
              <Heading color="neutral-light">Heading 1 Neutral Light</Heading>
              <Heading color="neutral-light" tag="h2">Heading 2 Neutral Light</Heading>
              <Heading color="neutral-light" tag="h3">Heading 3 Neutral Light</Heading>
              <Heading color="neutral-light" tag="h4">Heading 4 Neutral Light</Heading>
              <Heading color="neutral-light" tag="h5">Heading 5 Neutral Light</Heading>
              <Heading color="neutral-light" tag="h6">Heading 6 Neutral Light</Heading>
            </Box>
            <Box hierarchy="ghost" padding="sm" height="auto">
              <Heading textAlign="right" color="neutral-dark">Heading 1 Neutral Dark</Heading>
              <Heading textAlign="right" color="neutral-dark" tag="h2">Heading 2 Neutral Dark</Heading>
              <Heading textAlign="right" color="neutral-dark" tag="h3">Heading 3 Neutral Dark</Heading>
              <Heading textAlign="right" color="neutral-dark" tag="h4">Heading 4 Neutral Dark</Heading>
              <Heading textAlign="right" color="neutral-dark" tag="h5">Heading 5 Neutral Dark</Heading>
              <Heading textAlign="right" color="neutral-dark" tag="h6">Heading 6 Neutral Dark</Heading>
            </Box>
          </Stack>
        </Box>

        <Box hierarchy="ghost" padding="sm">
          <Stack crossDirectionalAlign="flex-start">
            <Box color="primary" padding="sm" height="auto">
              <TextContent color="secondary" size="md">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </TextContent>
            </Box>
            <Box hierarchy="ghost" padding="sm" height="auto">
              <TextContent color="primary" size="md">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </TextContent>
            </Box>
          </Stack>
        </Box>
      </Box>
    </main>
  );
}
