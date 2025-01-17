---
learningObjectiveId: "021.09.02"
parentId: "021.09"
title: Batteries
---

An electric battery is a source of electric power consisting of one or more
electrochemical cells with external connections for powering electrical devices.

When a battery is supplying electric power, its positive terminal is the cathode
and its negative terminal is the anode. The terminal marked negative is the
source of electrons that will flow through an external electric circuit to the
positive terminal.

When a battery is connected to an external electric load, a redox reaction
converts high-energy reactants to lower-energy products, and the free-energy
difference is delivered to the external circuit as electrical energy.
Historically the term "battery" specifically referred to a device composed of
multiple cells; however, the usage has evolved to include devices composed of a
single cell.

[Source](https://en.wikipedia.org/wiki/Electric_battery)

Since battery cells are able to produce relatively low voltage, they are placed
in series to achieve higher voltage levels. This means that

**if one cell fails, the entire battery is rendered inoperative**

|                          | lead-acid     | nickel-cadmium                     | lithium-ion | lithium-polymer |
| ------------------------ | ------------- | ---------------------------------- | ----------- | --------------- |
| Electrolyte              | Sulfuric acid | 70% water / 30% potassium peroxide | --          | --              |
| Nominal voltage per cell | 2 - 2.2v      | 1.2v - 1.25v                       | --          | --              |
| Load behaviour           |               |                                    |             |                 |
| Charging characteristics |               |                                    |             |                 |
| Risk of Thermal runaway  |               |                                    |             |                 |

### Thermal runaway

Generally, charging a battery will cause it to heat up. Think about how warm an
older phone can get get as it charging. However this heating up is kept in check
as long as the current being sent to the battery is within limits.

Thermal runaway occurs when over charging of a battery takes place. Under these
circumstances, battery temperature quickly increases, increasing the rate of the
chemical transformations occurring within a cell which leads to even more
heating, leading to a vicious cycle. Eventually, the electrolyte will boil
resulting in a fire or explosion.

Thermal runaway can be prevented by monitoring battery temperature, and stopping
to charge if the temperature gets too high.

```tsx
<Question id="4J6ODTINMG" lo="021.09.02.01.03">
  <Text variant="oneCorrect">
    The voltage of a fully charged <Subject /> is approximately
  </Text>

  <Option subject={[["lead-acid battery"]]}>2.2v</Option>
  <Option subject={[["nickel-cadmium battery"]]}>1.25V</Option>
  <Option>1.5V</Option>
  <Option>3.2V</Option>
</Question>
```

```tsx
<Question id="X70ITOG264" lo="021.09.02.01.03">
  <Text variant="oneCorrect">
    Why are the batteries used in modern aircraft of the nickel-cadmium type?
  </Text>
  <Text variant="multipleCorrect" select={6}>
    Which of these statements best describe the nickel-cadmium batteries used in
    modern aircraft?
  </Text>
  <Option why="Thermal runaway is much more likely in NiCa batteries and require more expensive and complex controllers than Lead-acid batteries">
    Low risk of thermal runaway
  </Option>
  <Option why="This is just wrong from a physics point of view. You need a lower internal resistance to generate higher thermal power.">
    Higher internal resistance, hence higher thermal power
  </Option>
  <Option why="lead-acid batteries are a cheaper alternative to NiCa batteries">
    Cheap manufacture cost
  </Option>
  <Option why="Potassium peroxyde is corrosive">
    Their electrolyte is neither corrosive nor dangerous
  </Option>
  <Option correct>
    Good charging and discharging capabilities at high ratings
  </Option>
  <Option
    correct
    why="compared to Lead Acid batteries, NiCa batteries function much better at very low temperatures."
  >
    Wider permissible temperature range
  </Option>
  <Option correct why="NiCa batteries allow for very high charging currents">
    Reduced charging time
  </Option>
  <Option correct>Constant output voltage</Option>
  <Option correct>Good storage capacity</Option>
  <Option correct>Sturdiness thanks to its metal casing</Option>

  <Option correct>
    They weight less when compared with lead-acid batteries
  </Option>
</Question>
```

```tsx
<Question id="QAKJC6KTEM" lo={["021.09.02.01.05", "021.09.02.01.06"]}>
  <Text variant="oneCorrect">
    The sentence that best describes <Subject /> is...
  </Text>
  <Option subject={[["the capacity of a battery"]]}>
    Amount of ampere-hours that a fully charged battery can supply
  </Option>
  <Option subject={[["the battery voltage"]]}>
    The Difference of electrical potential between the two terminals of a
    battery
  </Option>
  <Option subject={[["the battery amperage"]]}>
    The electrical current flowing in or out of the battery.
  </Option>
  <Option>
    Number of charging and discharging cycles that a battery can withstand
    without deterioration
  </Option>
  <Option>Intensity withstood by the battery during charging</Option>

  <Option>
    No load voltage of the battery multiplied by its rated output current
  </Option>
</Question>
```

```tsx
<Question id="P1D9JS6GDN" lo="021.09.02.01.09">
  <Text variant="oneCorrect">How should a laptop battery fire be handled</Text>
  <Option
    correct
    why="The important thing to remember is that a fire should be handled where it happens. The laptop should not be moved around"
  >
    Use an appropriate fire extinguisher
  </Option>
  <Option why="Do not move the laptop">
    Move the laptop computer away from the passengers and apply a dry chemical
    fire extinguisher at the base of the fire.
  </Option>
  <Option why="Do not move the laptop">
    Move the laptop to a vacant toilet or galley
  </Option>

  <Option why="Do not move the laptop">
    Transfer the laptop onto a fire-resistant burn bag
  </Option>
</Question>
```

```tsx
<Question id="O3X8ODM0T6" lo="021.09.02.01.10">
  <Text variant="oneCorrect">
    What can be the cause of a significant increase in battery temperature?
  </Text>
  <Option correct>Thermal Runaway</Option>
  <Option why="Typically, draining energy from a battery will not cause it to heat up. Charging it will.">
    Excessive battery load
  </Option>

  <Option>A failure of the voltage regulator</Option>
  <Option>A failure of the alternator</Option>
</Question>
```

```tsx
<Question id="7Y7VCNN3IY" lo="021.09.02.01.10">
  <Text variant="oneCorrect">
    A lithium ion battery has to be considered most unsafe when...
  </Text>
  <Option
    correct
    why="If the two terminals are directly connected, the battery will quickly begin overheating"
  >
    it has an internal short-circuit
  </Option>
  <Option why="Charging the battery too quickly can be dangerous, but not as dangerous as a short circuit">
    It is charged quickly
  </Option>
  <Option why="This can cause long term permanent damage to the battery, but does not have immediate consequences">
    It is discharged too quickly
  </Option>

  <Option why="This can cause long term permanent damage to the battery, but does not have immediate consequences">
    It has a low state of charge
  </Option>
</Question>
```

```tsx
<Question id="CTEQCESK2M" lo="021.09.02.01.10">
  <Text variant="oneCorrect">
    Large NiCd batteries in aircraft need to be closely monitored during
    charging to avoid damage resulting from...
  </Text>
  <Option
    correct
    why="if over charging occurs, outgassing reactions occur that heat the battery leading to a thermal runaway"
  >
    Excessive temperature caused by outgassing when the voltage decreases
  </Option>
  <Option why="NiCa batteries are resistent to high currents">
    High current during the charging process when the battery is not yet fully
    loaded
  </Option>
  <Option why="aircraft use open batteries so that pressure accumulation is not possible">
    Pressure build up due to gas formation
  </Option>

  <Option why="overcharging won't lead to excessive voltage, rather over current">
    Excessive voltage due to overcharging
  </Option>
</Question>
```

```tsx
<Question id="MJAHQSG124" lo="021.09.02.01.10">
  <Text variant="oneTwo">Which of these statements are correct?</Text>
  <Option correct>
    A thermal runaway is an uncontrolled positive feedback loop
  </Option>
  <Option correct>
    A lithium-ion battery that has been damaged externally may suffer from a
    thermal runaway
  </Option>
  <Option why="A thermal runway needs a vicious cycle, or in more technical terms, a positive feedback loop">
    A thermal runaway is an uncontrolled negative feedback loop
  </Option>

  <Option>
    A lithium-ion battery that has been damaged externally is immune from a
    thermal runaway
  </Option>
</Question>
```
