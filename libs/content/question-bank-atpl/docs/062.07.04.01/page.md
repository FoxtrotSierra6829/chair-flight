---
learningObjectiveId: "062.07.04.01"
parentId: "062.07.04"
title: Performance-based navigation (PBN) principles
---

### PBN errors

- **Path Definition Error (PDE)**: Corresponds to an error between the RNAV path
  and the path over the ground. This error arises from the RNAV system inability
  to accurately define the desired path. **If you were a RNAV system**, this
  error would be equivalent to you drawing a line in a chart that is not 100%
  aligned with the optimal path between 2 waypoints.

- **Flight Technical Error (FTE)**: Corresponds to an error between the aircraft
  flight path and the RNAV path. This error arises from the piloting performance
  of the aircraft or the autopilot system. This error is the difference between
  your actual flight path, and the line you drew on the chart before.

- **Navigation System Error (NSE)**: Corresponds to an error between the actual
  position of the aircraft and the position reported measured by the aircraft
  systems.

- **Total System Error (TSE)**: Is the sum of the 3 errors described above.

<Question
id="C6QGC3RVJS"
lo={[
"062.07.04.01.01",
"062.07.04.01.02",
"062.07.04.01.03",
"062.07.04.01.04",
]}
contentRef="### PBN errors"

>   <Text variant="oneCorrect">

    Which of these errors constitutes a${subject}?

  </Text>
<Option subject={[["Path Definition Error"], ["PDE"]]}>
  An error during PBN operations rising from the RNAV system and its inability
  to specify the desired path.
</Option>
<Option subject={[["Flight Technical Error"], ["FTE"]]}>
  An error during PBN operations related to the execution of flight along a
  defined path.
</Option>
<Option subject={[["Navigation System Error"], ["NSE"]]}>
  An error during PBN operation in the accuracy of determining the actual
  aircraft coordinates.
</Option>
<Option subject={[["Total System Error"], ["TSE"]]}>
  The combined sum of Path Defintion, Flight Technical, and Navigation system
  errors.
</Option>
<Option subject={[["Total System Error"], ["TSE"]]}>PDE + FTE + NSE.</Option>
<Option why="Almost describes TSE, except TSE is the sum of the 3 errors: PDE + TSE + NSE">
  PDE + FTE - NSE
</Option>
<Option why="Almost describes TSE, except TSE is the sum of the 3 errors: PDE + TSE + NSE">
  PDE + FTE / NSE
</Option>

  <Option why="Almost describes TSE, except TSE is the sum of the 3 errors: PDE + TSE + NSE">
    PDE + FTE x NSE
  </Option>
</Question>
```
