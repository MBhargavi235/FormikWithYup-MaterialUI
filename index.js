import React,{useState} from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";


const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  date: yup.string("Select date").required("Date is required"),
  age: yup.string("select age").required("age is required"),
  hobbies: yup.string().required("hobbies are Required"),
});
const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      age: "",
      date: "",
      hobbies:"",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      formik.resetForm();
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          id="date"
          label="Date"
          type="date"
          format="DD/MM/YYYY"
          defaultValue=""
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true
          }}
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            name="age"
            id="demo-simple-select-label"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          >
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
            <MenuItem value="30">Thirty</MenuItem>
          </Select>
        </FormControl>
<FormControl>
  <br/>
<FormLabel component="legend">Hobbies</FormLabel>
  <FormGroup 
   name="hobbies"
   value={formik.values.hobbies}
   onChange={formik.handleChange}
   error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}
   helperText={formik.touched.hobbies && formik.errors.hobbies}
   
   >
  <FormControlLabel control={<Checkbox/>}  name="hobbies" value ="Label" 
  checked={formik.values.hobbies.includes('Label')}  label="Label" />
  <FormControlLabel control={<Checkbox />} name="hobbies" 
  checked={formik.values.hobbies.includes('Disabled')}  value="Disabled" label="Disabled" />
</FormGroup>
</FormControl>
<br/>
      <Button
          color="primary"
          variant="contained"
          type="submit"
          style={{ marginTop: 30 }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

ReactDOM.render(<WithMaterialUI />, document.getElementById("root"));
