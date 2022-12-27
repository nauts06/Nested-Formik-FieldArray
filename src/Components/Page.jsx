import React, { useState } from "react";
import { render } from "react-dom";
import { Formik, Field, Form, FieldArray } from "formik";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import "../App.css";

const initialValues = {
  name: "",
  Courses: [
    {
      courseName: "Select Course",
    },
  ],
  Payments: [
    {
      year: "",
      obj: [
        {
          month: "January",
          fees: "200",
        },
      ],
    },
  ],
};

const Page = () => {
  const [first, setfirst] = useState(false);
  const handleAdd = (event) => {
    if (
      event.target.value === "2021" ||
      event.target.value === "2022" ||
      event.target.value === "2023" ||
      event.target.value === "2024" ||
      event.target.value === "2025"
    ) {
      setfirst(true);
    } else {
      setfirst(false);
    }
    console.log("array>>", first);
  };

  return (
    <>
      <div id="set">
        <h1>Formik FieldArray Nested Array Of Object</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("values", values);
          }}
          render={({
            values,
            errors,
            touched,
            handleReset,
            handleSelect,
            handleChange,
          }) => {
            return (
              <Form>
                <TextField
                  variant="standard"
                  name="name"
                  placeholder="Enter Name"
                  label="Enter Name"
                  type="text"
                  onChange={handleChange}
                />
                <br />
                <br />
                <div id="border">
                  <FieldArray
                    name="Courses"
                    render={({ insert, remove, push }) => (
                      <div>
                        <Button
                          variant="contained"
                          onClick={() => push({ courseName: "" })}
                        >
                          Add Course
                        </Button>
                        {values.Courses.length > 0 &&
                          values.Courses.map((friend, index) => (
                            <div className="row" key={index}>
                              <Select
                                sx={{ width: 200 }}
                                label="Select Course"
                                name={`Courses.${index}.courseName`}
                                placeholder="Enter Course Name"
                                defaultValue="select"
                                type="text"
                                onChange={handleChange}
                              >
                                <MenuItem value="select" selected>
                                  <em>Select Course</em>
                                </MenuItem>
                                <MenuItem value="B.Tech">
                                  Bachelor of Technology.
                                </MenuItem>
                                <MenuItem value="B.Arch">
                                  Bachelor of Architecture.
                                </MenuItem>
                                <MenuItem value="B.Sc">
                                  Information Technology.
                                </MenuItem>
                                <MenuItem value="BDS">
                                  Bachelor of Dental Surgery
                                </MenuItem>
                                <MenuItem value="BBS">
                                  Bachelor of Business Studies
                                </MenuItem>
                              </Select>
                              <Button
                                variant="contained"
                                color="error"
                                onClick={() => remove(index)}
                              >
                                remove
                              </Button>
                            </div>
                          ))}
                      </div>
                    )}
                  />
                </div>
                <br />
                <br />
                <FieldArray
                  name="Payments"
                  render={({ insert, remove, push }) => (
                    <div>
                      <Button
                        variant="contained"
                        onClick={() =>
                          push({
                            year: "",
                            obj: [
                              {
                                month: "",
                                fees: "",
                              },
                            ],
                          })
                        }
                      >
                        Add Year
                      </Button>
                      {values.Payments.length > 0 &&
                        values.Payments.map((item, index) => (
                          <div className="row" key={index}>
                            <Select
                              sx={{ width: 200 }}
                              name={`Payments.${index}.year`}
                              label="Select Year"
                              defaultValue="select"
                              type="text"
                              onChange={(event) => (
                                handleChange(event), handleAdd(event)
                              )}
                            >
                              <MenuItem value="select">
                                <em>Select Year</em>
                              </MenuItem>
                              <MenuItem value="2021">2021</MenuItem>
                              <MenuItem value="2022">2022</MenuItem>
                              <MenuItem value="2023">2023</MenuItem>
                              <MenuItem value="2024">2024</MenuItem>
                              <MenuItem value="2025">2025</MenuItem>
                            </Select>

                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => remove(index)}
                            >
                              remove
                            </Button>
                            <br />
                            <br />
                            <div id="border">
                              {first == true ? (
                                <FieldArray
                                  name={`Payments.${index}.obj`}
                                  render={({ insert, remove, push }) => (
                                    <div>
                                      <Button
                                        variant="contained"
                                        type="button"
                                        onClick={() =>
                                          push({ month: "", fees: "" })
                                        }
                                      >
                                        Add month
                                      </Button>

                                      {values.Payments[index].obj.length > 0 &&
                                        values.Payments[index].obj.map(
                                          (elem, ind) => (
                                            <div className="row" key={index}>
                                              <br />
                                              <Select
                                                sx={{ width: 200 }}
                                                name={`Payments.${index}.obj.${ind}.month`}
                                                label="Select Month"
                                                defaultValue="select"
                                                type="text"
                                                onChange={handleChange}
                                              >
                                                <MenuItem value="select">
                                                  <em>Select Year</em>
                                                </MenuItem>
                                                <MenuItem value="January">
                                                  January
                                                </MenuItem>
                                                <MenuItem value="feburary">
                                                  feburary
                                                </MenuItem>
                                                <MenuItem value="March">
                                                  March
                                                </MenuItem>
                                                <MenuItem value="Aprail">
                                                  Aprail
                                                </MenuItem>
                                                <MenuItem value="May">
                                                  May
                                                </MenuItem>
                                                <MenuItem value="June">
                                                  June
                                                </MenuItem>
                                                <MenuItem value="July">
                                                  July
                                                </MenuItem>
                                                <MenuItem value="August">
                                                  August
                                                </MenuItem>
                                                <MenuItem value="September">
                                                  September
                                                </MenuItem>
                                                <MenuItem value="Octuber">
                                                  Octuber
                                                </MenuItem>
                                                <MenuItem value="November">
                                                  November
                                                </MenuItem>
                                                <MenuItem value="December">
                                                  December
                                                </MenuItem>
                                              </Select>

                                              <TextField
                                                variant="standard"
                                                name={`Payments.${index}.obj.${ind}.fees`}
                                                placeholder="Enter Fees"
                                                label="Enter Fees"
                                                type="text"
                                                onChange={handleChange}
                                              />
                                              <Button
                                                variant="contained"
                                                color="error"
                                                type="button"
                                                onClick={() => remove(index)}
                                              >
                                                remove
                                              </Button>
                                            </div>
                                          )
                                        )}
                                    </div>
                                  )}
                                />
                              ) : null}
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Form>
            );
          }}
        />
      </div>
    </>
  );
};

export default Page;
