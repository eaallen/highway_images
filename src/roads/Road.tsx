import { Box, ClickAwayListener, FormControl, MenuItem, Modal, Select, SelectChangeEvent, Typography } from "@mui/material"
import { ReactNode, useState } from "react"
import { RoadImage, Route } from "./data/types";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Unstable_Grid2';

export default function Road(props: { route: Route }) {
    const [start, setStart] = useState(props.route.start)
    const [end, setEnd] = useState(props.route.end)

    const handleChange = (event: SelectChangeEvent) => {
        const selelctedStart = event.target.value
        setStart(selelctedStart);
        if (selelctedStart === props.route.start) {
            setEnd(props.route.end)
        } else {
            setEnd(props.route.start)
        }
    };

    const imageList: RoadImage[] = structuredClone(props.route.roadImages)
    if (end !== props.route.end) {
        imageList.reverse()
    }

    return <>
        <Box>
            <Grid container alignItems="center" justifyContent="center" sx={{ textAlign: 'center' }} columns={3}>
                <Grid xs={1}>
                    <Typography variant="overline"> From </Typography>
                </Grid>
                <Grid xs={1}></Grid>
                <Grid xs={1}>
                    <Typography variant="overline"> To </Typography>
                </Grid>

                <Grid xs={1}>
                    <FormControl sx={{ m: 1 }}>
                        <Select
                            value={start}
                            onChange={handleChange}
                        >
                            <MenuItem value={props.route.start}>{props.route.start}</MenuItem>
                            <MenuItem value={props.route.end}>{props.route.end}</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={1}>
                    <ArrowForwardIcon />
                </Grid>
                <Grid xs={1}>
                    <Typography> {end} </Typography>
                </Grid>

            </Grid>
        </Box>
        <Box sx={{ textAlign: "center" }}>

            <Grid container spacing={1}>
                {imageList.map((item, idx) => {
                    return (
                        <Grid key={item.imgSrc} xs={item.isSign ? 12 : 6}>
                            <ImageModal>
                                <img
                                    src={`${item.imgSrc}?w=2408`}
                                    alt={item.name}
                                    style={{ maxWidth: "100%" }}

                                />
                                <Typography>{idx + 1}. {item.name}</Typography>
                            </ImageModal>
                        </Grid>
                    );
                })}
            </Grid>

        </Box>
    </>
}


function ImageModal(props: {
    children?: ReactNode
}) {
    const [open, setOpen] = useState(false)

    if (!open) {
        return <span onClick={() => setOpen(true)}>{props.children}</span>
    }

    return <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClick={() => setOpen(false)}
        >
            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                textAlign: 'center'
,            }}>
                {props.children}
            </Box>
        </Modal>
    </ClickAwayListener>
}