import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
// @ts-ignore
import Ukraine from '@svg-maps/ukraine';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import { theme } from '../../theme';
import { EVENT_COORDINATES, Region, TOURS } from '../../../constants/constants';
import { ReactComponent as Expand } from '../../icons/Expand.svg';
import { usePreventBodyScroll } from '../../hooks/preventBodyScroll';
import { GoBack } from '../../components/goBack/GoBack';
import { Card } from '../../components/card/Card';
import { Message } from '../../../components/message/Message';
// import { ReactComponent as Search } from '../../icons/Search.svg';
// import { ReactComponent as Sort } from '../../icons/Sort.svg';
// import { Message } from '../../../components/message/Message';
// import { ReactComponent as CardLink } from '../../icons/CardLink.svg';

const ACTIVE_REGIONS = (Object.values(Region) as Region[]).filter((region) =>
  TOURS.map((place) => place.region).includes(region),
);

export const Map: React.FC<{ width: number }> = ({ width }) => {
  const [currentLocation, setCurrentLocation] = useState<Region | null>(null);

  const md = useMediaQuery(theme.breakpoints.down('lg'));
  const height = md ? width * 0.67 : width * 0.67 * 0.5;

  const { disableScroll, enableScroll } = usePreventBodyScroll();

  // const handleWheelTags = (e: React.WheelEvent) => {
  //   if (e.target && (e.target as HTMLElement).closest('.scroller')) {
  //     // @ts-ignore
  //     (e.target as HTMLElement).closest('.scroller').scrollLeft += e.deltaY;
  //   }
  // };

  const handleWheelRegions = (e: React.WheelEvent) => {
    if (e.target && (e.target as HTMLElement).closest('.scroller')) {
      // @ts-ignore
      (e.target as HTMLElement).closest('.scroller').scrollLeft += e.deltaY;
    }
  };

  const handleLocationClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;

    setCurrentLocation(target.id as Region);
  };

  const cleanLocations = () => {
    Object.values(Region).forEach((region) => {
      const location = document.getElementById(region) as HTMLElement;

      if (location) {
        location.style.fill = '#212121';
      }
    });
  };

  useEffect(() => {
    if (currentLocation) {
      const region = document.getElementById(currentLocation);

      if (region) {
        cleanLocations();
        region.style.fill = 'red';
      }
    } else {
      cleanLocations();
    }
  }, [currentLocation]);

  return (
    <Container>
      <GoBack text="new.button.back.home" location="/" />
      <Stack
        direction={md ? 'column' : 'row'}
        sx={{
          '.svg-map__location': {
            fill: '#212121',
          },
        }}
      >
        <Box
          sx={{
            overflow: 'hidden',
            display: 'flex',
            flexBasis: md ? '100%' : '50%',
            position: 'relative',
            minHeight: height,
            border: '1px solid #212121',
            borderRadius: '12px',
          }}
          className="map-container"
        >
          <SVGMap map={Ukraine} onLocationClick={handleLocationClick} />
          {EVENT_COORDINATES.map((event) => (
            <Stack
              key={event.region}
              sx={{
                background: 'red',
                width: 30,
                height: 30,
                borderRadius: '50%',
                position: 'absolute',
                top: `calc(${event.coordinates[0]} - 10px)`,
                left: `calc(${event.coordinates[1]} - 10px)`,
              }}
              alignItems="center"
              justifyContent="center"
            >
              <Typography>{event.events}</Typography>
            </Stack>
          ))}
        </Box>
        <Stack
          sx={{
            borderRadius: '16px',
            border: '1px solid #212121',
            ml: md ? 0 : 4,
            mt: md ? 4 : 0,
            pb: 2,
            flexBasis: md ? '100%' : '50%',
            maxWidth: md ? '100%' : '50%',
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            px={1.5}
            pt={3}
            alignItems="center"
          >
            <Typography variant="h2" textTransform="uppercase">
              <Message id="new.locations.title" />
            </Typography>
            {/*<Stack direction="row">*/}
            {/*  <IconButton>*/}
            {/*    <Search />*/}
            {/*  </IconButton>*/}
            {/*  <IconButton>*/}
            {/*    <Sort />*/}
            {/*  </IconButton>*/}
            {/*</Stack>*/}
          </Stack>
          {/*<Box*/}
          {/*  pt={2.5}*/}
          {/*  pb={1.5}*/}
          {/*  px={1.5}*/}
          {/*  borderBottom="1px solid #212121"*/}
          {/*  whiteSpace="nowrap"*/}
          {/*  overflow="auto"*/}
          {/*  className="no-scroll scroller"*/}
          {/*  onMouseEnter={disableScroll}*/}
          {/*  onMouseLeave={enableScroll}*/}
          {/*  onWheel={handleWheelTags}*/}
          {/*>*/}
          {/*  {[1, 2, 3, 4, 5, 6].map((i) => (*/}
          {/*    <Button*/}
          {/*      key={i}*/}
          {/*      sx={{*/}
          {/*        '&:not(:first-of-type)': {*/}
          {/*          ml: 1,*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      Lorem ipsum*/}
          {/*      <Typography*/}
          {/*        sx={{*/}
          {/*          background: '#212121',*/}
          {/*          ml: 1,*/}
          {/*          px: 0.5,*/}
          {/*          py: 0.25,*/}
          {/*          borderRadius: '4px',*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        23*/}
          {/*      </Typography>*/}
          {/*    </Button>*/}
          {/*  ))}*/}
          {/*</Box>*/}
          <Stack px={1.5} pt={0.5}>
            {ACTIVE_REGIONS.map((region) => (
              <Accordion
                key={region}
                sx={{
                  background: 'transparent',
                  mt: 1,
                  marginTop: '8px!important',
                }}
                expanded={currentLocation === region}
                onChange={(_, expanded) => {
                  setCurrentLocation(expanded ? region : null);
                }}
                disableGutters
              >
                <AccordionSummary
                  expandIcon={<Expand />}
                  id={region}
                  sx={{
                    background: '#161616',
                    borderRadius: '8px',
                    border: '1px solid #212121',
                    minHeight: 'unset!important',
                    '&.Mui-expanded': {
                      borderBottom: 'none',
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                  }}
                >
                  <Stack direction="row" alignItems="center">
                    <Typography>
                      <Message id={`new.oblast.${region}`} />
                    </Typography>
                    <Typography
                      sx={{
                        background: '#212121',
                        ml: 1,
                        px: 0.5,
                        py: 0.25,
                        borderRadius: '4px',
                        width: 17,
                        textAlign: 'center',
                      }}
                    >
                      {TOURS.filter((tour) => tour.region === region).length}
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    background: '#161616',
                    padding: '0!important',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                    border: '1px solid #212121',
                    borderTop: 'none',
                  }}
                >
                  <Box
                    width="100%"
                    overflow="scroll"
                    whiteSpace="nowrap"
                    onMouseEnter={disableScroll}
                    onMouseLeave={enableScroll}
                    onWheel={handleWheelRegions}
                    className="scroller"
                  >
                    {TOURS.filter((tour) => tour.region === region).map(
                      (tour) => (
                        <Card key={tour.location} location={tour} width={275} />
                      ),
                    )}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
