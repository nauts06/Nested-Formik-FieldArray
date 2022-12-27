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
          month: "",
          fees: "",
        },
      ],
    },
  ],
};

const Page = () => {
  const [first, setfirst] = useState(false);
  const handleAdd = (event) => {
    if (
      event.target.value == 2021 ||
      event.target.value == 2022 ||
      event.target.value == 2023 ||
      event.target.value == 2024 ||
      event.target.value == 2025
    ) {
      setfirst(true);
    }
    console.log("array>>", first);
  };

  return (
    <>
      <div id="set">
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
                <div id="border"></div>
                <FieldArray
                  name="Courses"
                  render={({ insert, remove, push }) => (
                    <div>
                      {values.Courses.length > 0 &&
                        values.Courses.map((friend, index) => (
                          <div className="row" key={index}>
                            <Select
                              name={`Courses.${index}.courseName`}
                              placeholder="Enter Course Name"
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
                      <Button
                        variant="contained"
                        onClick={() => push({ courseName: "" })}
                      >
                        Add
                      </Button>
                    </div>
                  )}
                />
                <br />
                <FieldArray
                  name="Payments"
                  render={({ insert, remove, push }) => (
                    <div>
                      {values.Payments.length > 0 &&
                        values.Payments.map((friend, index) => (
                          <div className="row" key={index}>
                            <Select
                              name={`Payments.${index}.year`}
                              placeholder="Enter Course Name"
                              type="text"
                              onChange={(event) => (
                                handleChange(event), handleAdd(event)
                              )}
                            >
                              <MenuItem value="select" selected>
                                <em>selectYear</em>
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
                            <div>
                              {first === true ? (
                                <div>
                                  <div  key={index}>
                                    <Select
                                      select
                                      name={`Payments.obj.${index}.month`}
                                      placeholder="Enter Course Name"
                                      type="text"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value="select" selected>
                                        <em>Select Month</em>
                                      </MenuItem>
                                      <MenuItem value="January">
                                        January
                                      </MenuItem>
                                    </Select>
                                    <br />
                                    <TextField
                                      variant="standard"
                                      name={`Payments.obj.${index}.fees`}
                                      placeholder="Enter Fees"
                                      label="Enter Fees"
                                      type="text"
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              ) : null}
                            </div>
                           
                          </div>
                        ))}
                      <Button
                        variant="contained"
                        onClick={() => push({ year: "" })}
                      >
                        Add
                      </Button>
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
