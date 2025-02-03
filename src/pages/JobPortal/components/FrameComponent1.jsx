import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import FrameComponent2 from "./FrameComponent2";

const FrameComponent1 = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        borderRadius: "4px",
        border: "1px solid #e9eaed",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0.75rem 0.688rem",
        gap: "0.75rem",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "0.875rem",
        color: "#2e343a",
        fontFamily: "Inter",
      }}
    >
      <b style={{ position: "relative", lineHeight: "1.25rem" }}>
        Active Job Opening
      </b>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "100%",
          gap: "1.25rem",
          fontSize: "0.75rem",
          color: "#585f65",
        }}
      >
        <div
          style={{
            width: "34.563rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "0.5rem",
            maxWidth: "100%",
          }}
        >
          <TextField
            style={{
              border: "none",
              backgroundColor: "transparent",
              height: "2rem",
              flex: "1",
              fontFamily: "Inter",
              fontSize: "0.75rem",
              color: "#585f65",
              minWidth: "16.75rem",
              maxWidth: "100%",
            }}
            placeholder="Search by job title"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="16px" height="16px" src="/icon-website-11.svg" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#e9eaed" },
              "& .MuiInputBase-root": {
                height: "32px",
                backgroundColor: "#f8f9fa",
                paddingLeft: "8px",
                fontSize: "12px",
              },
              "& .MuiInputBase-input": { paddingLeft: "4px", color: "#585f65" },
            }}
          />
          <FormControl
            style={{
              height: "2rem",
              width: "8.313rem",
              fontFamily: "Inter",
              fontSize: "0.75rem",
              color: "#585f65",
            }}
            variant="standard"
            sx={{
              borderColor: "#e9eaed",
              borderStyle: "SOLID",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "4px",
              width: "24.050632911392405%",
              height: "32px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "32px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "32px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "32px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "32px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#585f65",
                fontSize: 12,
                fontWeight: "Regular",
                fontFamily: "Inter",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "8px",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="16px"
                  height="16px"
                  src="/icon-website-12.svg"
                  style={{ marginRight: "8px" }}
                />
              )}
            >
              <MenuItem>Role Category</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div
          style={{
            height: "1.5rem",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0.25rem 0.5rem",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1.25rem",
            }}
          >
            <img
              style={{
                height: "1rem",
                width: "1rem",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                minHeight: "1rem",
              }}
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
            <div style={{ position: "relative", lineHeight: "1rem" }}>
              See matching jobs Only
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          maxWidth: "100%",
        }}
      >
        <FrameComponent2 />
        <FrameComponent2 propBorderRadius="unset" />
        <FrameComponent2 propBorderRadius="unset" />
        <FrameComponent2 propBorderRadius="unset" />
        <FrameComponent2 propBorderRadius="0px 0px 4px 4px" />
      </div>
    </div>
  );
};

export default FrameComponent1;
