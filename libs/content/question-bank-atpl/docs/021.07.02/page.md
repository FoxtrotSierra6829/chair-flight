---
learningObjectiveId: "021.07.02"
parentId: "021.07"
title: Ice warning systems
---

### Ice detection systems

#### Pressure differencial system

This device consists of 2 sets of holes facing the incoming air. One set
contains just one large hole, and the second set contains several small holes.
Summed all together, the small holes have the same area as the large hole.
Because of this, under normal conditions, the pressure measured from both sets
will be the same, that is, there is 0 pressure differential.

When Icing conditions are observed, the slow holes will close much faster than
the big hole, generating a pressure differential which can be measured. This
will trigger an ice warning light in the cockpit. Eventually, the big hole will
close as well, and the pressure differential will be 0. However, this will not
dismiss the alarm light.

When de-icing heating is turned on, the ice will melt much faster on the smaller
holes, causing, again a pressure differential, but with opposite direction. This
will cause the alarm light to be dismissed.

#### Smith's ice detector

This system uses a vane protruding into the airflow and 2 sets of wholes
distributed in front and in the back of the system. When icing conditions occur,
the front of the vane will freeze first, resulting in negative pressure on the
backside of the probe which triggers a warning light.

Remember, The smiths ice detector is activated by a **decrease in dynamic
pressure**!

#### Electromechanical systems using resonance frequencies (Rosemount ice detector)

This system consits of a vibrating detector. When there is no icing the detector
vibrates at a a fixed frequency. When ice starts to accumulate, increasing its
mass, and reducing the vibration frequency of the detector. This triggers the
warning light in the cockpit. A heater is provided for this system in order to
clear accumulated ice and reset the system.

![Image](images/021.07.02.01-02.png)

#### Hot rod ice detector system

It consist of a rod placed outside the cockpit in a position that is easely
observable from the flight deck. This rod is usally colored matte black so that
ice it can be easily seen when it deposits. A heater is provided to heat the rod
and clear the ice.

![Image](images/021.07.02.01-01.png)

### Operating principle of ice warning systems

#### Primary automatic

The ice detector automatically activates ice protection at the optimal moment.
This system provides pilots with a system status (active / inactive) and the
ability to manually override.

#### Primary Manual

The ice detector trigger a warning light, and the crew is responsible for
activating the ice protection system

#### Advisory

The flight crew is responsible for activating the ice protection device based on
recommendation of the flight manual. For example, most small aircraft POH's
recommend turning the pitot heat on when outside air temperature is less than
5ºC, regardless if icing conditions are observed or not. In this system, the ice
detector signals are an advisory back up indicator.

```tsx
<Question
  id="OZJGNF8HJY"
  lo="021.07.02.01.01"
  contentRef="#pressure-differential-system"
>
  <Text variant="oneCorrect">
    Which Of these Statements is true regarding differential pressure ice
    accretion detector?
  </Text>
  <Text variant="multipleCorrect" select={5}>
    Which Of these Statements are true regarding differential pressure ice
    accretion detector?
  </Text>
  <Text variant="oneTwo">
    Which Of these Statements are true regarding differential pressure ice
    accretion detector?
  </Text>
  <Option>Large holes freeze first</Option>
  <Option correct>Small holes freeze first</Option>
  <Option correct>Small holes melt first</Option>
  <Option>Small holes are heated first</Option>
  <Option>Small and big holes are heated at the same time</Option>
  <Option correct>
    An alarm light is activated in the cockpit when a pressure difference is
    measured between small and big apertures
  </Option>

  <Option>large holes melt first</Option>
  <Option>The torque of a rotating serrated shat is measured</Option>
  <Option>It is based on the measurement of temperature and moisture</Option>
</Question>
```

```tsx
<Question
  id="K7R2PLJJ2X"
  lo="021.07.02.01.02"
  contentRef="### Ice detection systems"
>
  <Text variant="oneCorrect">
    How does the <Subject /> ice detection system operate?
  </Text>
  <Option subject={[["advisory"]]}>
    The flight crew activates the ice protection system based on Flight manual
    recommendations, such as outside air temperature, and moisture. The ice
    detector signals serve as a backup indicator
  </Option>
  <Option subject={[["primary manual"]]}>
    The flight crew activates the ice protection system based on the ice
    detector signals
  </Option>
  <Option subject={[["primary automatic"]]}>
    The ice protection system is activated automatically based on the ice
    detector signal. A manual override is available to the cabin crew.
  </Option>
  <Option>
    The ice protection system is activated automatically based on the ice
    detector signal. A manual override is not possible
  </Option>

  <Option subject={[["primary manual"]]}>
    All ice detection systems are used to alert the cockpit crew, and ice
    protection systems are always activated manually.
  </Option>
</Question>
```
