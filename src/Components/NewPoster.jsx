import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Chip,
  Typography,
} from "@material-ui/core";
import React from "react";
import { FaInstagram, FaPlus, FaSortDown } from "react-icons/fa";
import { IoIosArrowUp, IoMdArrowDropup, IoMdPeople } from "react-icons/io";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useState } from "react";
import { width } from "@mui/system";

function NewPoster() {
  const [expanded, setExpanded] = useState(false);

  // Toggle the expanded state when the arrow is clicked
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="container-fluid">
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 d-flex justify-content-end">
            <Avatar src="/broken-image.jpg" className="mt-3" />
          </div>
          <div className="col-6 d-flex justify-content-start">
            <h3>Babu M</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            {/* <Avatar src="/broken-image.jpg" /> */}
          </div>
          <div className="col-6 d-flex justify-content-start gap-3">
            <Chip
              icon={<IoMdPeople className="text-primary" />}
              label={
                <>
                  Friends <FaSortDown className="mb-1" />
                </>
              }
              className="ml-2 text-primary"
              style={{ backgroundColor: "lightblue", borderRadius: "3px" }}
            />
            <Chip
              icon={<FaPlus className="text-primary" />}
              label={
                <>
                  Album <FaSortDown className="mb-1" />
                </>
              }
              className="ml-2 text-primary"
              style={{ backgroundColor: "lightblue", borderRadius: "3px" }}
            />
            <Chip
              icon={<FaInstagram className="text-primary" />}
              label={
                <>
                  Off <FaSortDown className="mb-1" />
                </>
              }
              className="ml-2 text-primary"
              style={{ backgroundColor: "lightblue", borderRadius: "3px" }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6"></div>
          <div className="col-6 d-flex justify-content-start">
            <Chip
              icon={<FaPlus className="text-primary" />}
              label={
                <>
                  AI label off <FaSortDown className="mb-1" />
                </>
              }
              className="ml-2 text-primary"
              style={{ backgroundColor: "lightblue", borderRadius: "3px" }}
            />
          </div>
        </div>
        <div className="row">
          <div class="form-group">
            <input
              className="mt-3"
              id="exampleFormControlTextarea1"
              placeholder="What's on your mind ?"
              rows="2"
              style={{
                width: "30%",
                marginLeft: "280px",
                fontSize: "20px",
                border: "0",
                outline: "none",
              }}
            ></input>
          </div>
        </div>
        <div className="row" style={{ marginTop: "310px" }}>
          <IoIosArrowUp
            onClick={toggleAccordion} // Toggle the accordion expansion on click
            style={{
              cursor: "pointer",
              marginLeft: "120px",
              marginBottom: "10px",
            }}
          />
          {/* <Accordion
            style={{
              width: "30%",
              marginLeft: "580px",
            }}
            expanded={expanded}
          > */}
          <Accordion
            style={{
              width: "390px",
              marginLeft: "580px",
              marginTop: "20px", // Add marginTop here
              position: "absolute",
              bottom: expanded ? "1px" : "80px", // Adjust this value based on your design
              transform: expanded ? "translateY(-10%)" : "none",
              transition: "transform 0.3s ease, bottom 0.3s ease",
            }}
            expanded={expanded} // Control the expansion based on state
          >
            <AccordionDetails className="border-bottom">
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
              <Typography className="mt-2 ms-3">photo/video</Typography>
            </AccordionDetails>
            <AccordionDetails className="border-bottom">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Typography className="mt-2 ms-3">Assignee</Typography>
            </AccordionDetails>
            <AccordionDetails className="border-bottom">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Typography className="mt-2 ms-3">Reporting to</Typography>
            </AccordionDetails>
            <AccordionDetails className="border-bottom">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Typography className="mt-2 ms-3">Camera</Typography>
            </AccordionDetails>
            <AccordionDetails className="border-bottom">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Typography className="mt-2 ms-3">Attachments</Typography>
            </AccordionDetails>
            <AccordionDetails className="border-bottom">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Typography className="mt-2 ms-3">Priority</Typography>
            </AccordionDetails>
            <AccordionDetails className="border-bottom">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Typography className="mt-2 ms-3">Labels</Typography>
            </AccordionDetails>
            <AccordionDetails className="border-bottom">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Typography className="mt-2 ms-3">Location</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default NewPoster;
