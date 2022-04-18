import { CT, JT, ProfileActionType, TimeBase, TimeMode } from "./enums";

export interface LinkParamset {
    // Fields
    //Long
    LONG_COND_VALUE_HI: number;
    LONG_COND_VALUE_LO: number;
    LONG_CT_OFF: CT
    LONG_CT_OFFDELAY: CT
    LONG_CT_ON: CT
    LONG_CT_ONDELAY: CT
    LONG_JT_OFF: JT
    LONG_JT_OFFDELAY: JT
    LONG_JT_ON: JT
    LONG_JT_ONDELAY: JT
    LONG_MULTIEXECUTE: boolean;
    LONG_OFFDELAY_TIME_BASE: TimeBase
    LONG_OFFDELAY_TIME_FACTOR: number;
    LONG_OFF_TIME_BASE: TimeBase
    LONG_OFF_TIME_FACTOR: number;
    LONG_OFF_TIME_MODE: TimeMode
    LONG_ONDELAY_TIME_BASE: TimeBase
    LONG_ONDELAY_TIME_FACTOR: number;
    LONG_ON_TIME_BASE: TimeBase
    LONG_ON_TIME_FACTOR: number;
    LONG_ON_TIME_MODE: TimeMode
    LONG_PROFILE_ACTION_TYPE: ProfileActionType;


    //Short
    SHORT_COND_VALUE_HI: number;
    SHORT_COND_VALUE_LO: number;
    SHORT_CT_OFF: CT
    SHORT_CT_OFFDELAY: CT
    SHORT_CT_ON: CT
    SHORT_CT_ONDELAY: CT
    SHORT_JT_OFF: JT;
    SHORT_JT_OFFDELAY: JT;
    SHORT_JT_ON: JT;
    SHORT_JT_ONDELAY: JT;
    SHORT_MULTIEXECUTE: boolean;
    SHORT_OFFDELAY_TIME_BASE: TimeBase;
    SHORT_OFFDELAY_TIME_FACTOR: number;
    SHORT_OFF_TIME_BASE: TimeBase;
    SHORT_OFF_TIME_FACTOR: number;
    SHORT_OFF_TIME_MODE: TimeMode;
    SHORT_ONDELAY_TIME_BASE: TimeBase;
    SHORT_ONDELAY_TIME_FACTOR: number;
    SHORT_ON_TIME_BASE: TimeBase
    SHORT_ON_TIME_FACTOR: number;
    SHORT_ON_TIME_MODE: TimeMode
    SHORT_PROFILE_ACTION_TYPE: ProfileActionType;

}  