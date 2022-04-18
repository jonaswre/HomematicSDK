export enum CT {
  VALUE_GE_LO = '0',
  VALUE_GE_HI = '1',
  VALUE_L_HI = '2',
  VALUE_L_LO = '3',
  VALUE_GE_LO_AND_L_HI = '4',
  VALUE_L_LO_OR_GE_HI = '5',
}

export enum JT {
  NOP = '0',
  ON_DELAY = '1',
  RAMP_ON = '2',
  ON = '3',
  OFF_DELAY = '4',
  RAMP_OFF = '5',
  OFF = '6',
}

export enum ProfileActionType {
  PROFILE_ACTION_TYPE_INACTIVE = '0',
  PROFILE_ACTION_TYPE_JUMP = '1',
  PROFILE_ACTION_TYPE_TOGGLE = '2',
}

export enum TimeBase {
  BASE_100_MS = '0',
  BASE_1_S = '1',
  BASE_5_S = '2',
  BASE_10_S = '3',
  BASE_1_M = '4',
  BASE_5_M = '5',
  BASE_10_M = '6',
  BASE_1_H = '7',
}

export enum TimeMode {
  TIME_IS_ABSOLUTE = '0',
  TIME_IS_MINIMAL = '1',
}
