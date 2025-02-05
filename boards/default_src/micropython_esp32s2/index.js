import * as Blockly from 'blockly/core';
import { Profile } from 'mixly';

import {
    PythonVariablesBlocks,
    PythonControlBlocks,
    PythonMathBlocks,
    PythonTextBlocks,
    PythonListsBlocks,
    PythonDictsBlocks,
    PythonLogicBlocks,
    PythonStorageBlocks,
    PythonProceduresBlocks,
    PythonTupleBlocks,
    PythonSetBlocks,
    PythonHtmlBlocks,
    PythonUtilityBlocks,
    PythonVariablesGenerators,
    PythonControlGenerators,
    PythonMathGenerators,
    PythonTextGenerators,
    PythonListsGenerators,
    PythonDictsGenerators,
    PythonLogicGenerators,
    PythonStorageGenerators,
    PythonProceduresGenerators,
    PythonTupleGenerators,
    PythonSetGenerators,
    PythonHtmlGenerators,
    PythonUtilityGenerators,
    Procedures,
    Variables,
    Python
} from '@mixly/python';

import {
    MicroPythonActuatorExternBlocks,
    MicroPythonActuatorOnBoardBlocks,
    MicroPythonAISensorBlocks,
    MicroPythonAIBlocks,
    MicroPythonBlynkBlocks,
    MicroPythonCCG1Blocks,
    MicroPythonCEGOBlocks,
    MicroPythonCommunicateBlocks,
    MicroPythonDisplayExternBlocks,
    MicroPythonDisplayOnBoardBlocks,
    MicroPythonFactoryBlocks,
    MicroPythonInputBlocks,
    MicroPythonIotBlocks,
    MicroPythonNetworkBlocks,
    MicroPythonPeG1Blocks,
    MicroPythonSensorExternBlocks,
    MicroPythonSensorOnBoardBlocks,
    MicroPythonSerialBlocks,
    MicroPythonSystemBlocks,
    MicroPythonWeatherBlocks,
    MicroPythonActuatorExternGenerators,
    MicroPythonActuatorOnBoardGenerators,
    MicroPythonAISensorGenerators,
    MicroPythonAIGenerators,
    MicroPythonBlynkGenerators,
    MicroPythonCCG1Generators,
    MicroPythonCEGOGenerators,
    MicroPythonCommunicateGenerators,
    MicroPythonDisplayExternGenerators,
    MicroPythonDisplayOnBoardGenerators,
    MicroPythonFactoryGenerators,
    MicroPythonInputGenerators,
    MicroPythonIotGenerators,
    MicroPythonNetworkGenerators,
    MicroPythonPeG1Generators,
    MicroPythonSensorExternGenerators,
    MicroPythonSensorOnBoardGenerators,
    MicroPythonSerialGenerators,
    MicroPythonSystemGenerators,
    MicroPythonWeatherGenerators
} from '@mixly/micropython';

import {
    MicropythonESP32S2Pins,
    MicropythonESP32S2InoutBlocks,
    MicropythonESP32S2PinsBlocks,
    MicropythonESP32S2InoutGenerators,
    MicropythonESP32S2PinsGenerators
} from './';

import './css/color_esp32s2_mixgoce.css';

Object.assign(Blockly.Variables, Variables);
Object.assign(Blockly.Procedures, Procedures);
Blockly.Python = Python;
Blockly.generator = Python;

Profile.default = {};
Object.assign(Profile, MicropythonESP32S2Pins);
Object.assign(Profile.default, MicropythonESP32S2Pins['MixGo CE']);

Object.assign(
    Blockly.Blocks,
    PythonVariablesBlocks,
    PythonControlBlocks,
    PythonMathBlocks,
    PythonTextBlocks,
    PythonListsBlocks,
    PythonDictsBlocks,
    PythonLogicBlocks,
    PythonStorageBlocks,
    PythonProceduresBlocks,
    PythonTupleBlocks,
    PythonSetBlocks,
    PythonHtmlBlocks,
    PythonUtilityBlocks,
    MicroPythonInputBlocks,
    MicroPythonSystemBlocks,
    MicroPythonSerialBlocks,
    MicroPythonCommunicateBlocks,
    MicroPythonIotBlocks,
    MicroPythonWeatherBlocks,
    MicroPythonAISensorBlocks,
    MicroPythonSensorOnBoardBlocks,
    MicroPythonSensorExternBlocks,
    MicroPythonPeG1Blocks,
    MicroPythonNetworkBlocks,
    MicroPythonAIBlocks,
    MicroPythonActuatorOnBoardBlocks,
    MicroPythonActuatorExternBlocks,
    MicroPythonDisplayOnBoardBlocks,
    MicroPythonDisplayExternBlocks,
    MicroPythonFactoryBlocks,
    MicroPythonBlynkBlocks,
    MicroPythonCCG1Blocks,
    MicroPythonCEGOBlocks,
    MicropythonESP32S2InoutBlocks,
    MicropythonESP32S2PinsBlocks
);

Object.assign(
    Blockly.Python.forBlock,
    PythonVariablesGenerators,
    PythonControlGenerators,
    PythonMathGenerators,
    PythonTextGenerators,
    PythonListsGenerators,
    PythonDictsGenerators,
    PythonLogicGenerators,
    PythonStorageGenerators,
    PythonProceduresGenerators,
    PythonTupleGenerators,
    PythonSetGenerators,
    PythonHtmlGenerators,
    PythonUtilityGenerators,
    MicroPythonInputGenerators,
    MicroPythonSystemGenerators,
    MicroPythonSerialGenerators,
    MicroPythonCommunicateGenerators,
    MicroPythonIotGenerators,
    MicroPythonWeatherGenerators,
    MicroPythonAISensorGenerators,
    MicroPythonSensorOnBoardGenerators,
    MicroPythonSensorExternGenerators,
    MicroPythonPeG1Generators,
    MicroPythonNetworkGenerators,
    MicroPythonAIGenerators,
    MicroPythonActuatorOnBoardGenerators,
    MicroPythonActuatorExternGenerators,
    MicroPythonDisplayOnBoardGenerators,
    MicroPythonDisplayExternGenerators,
    MicroPythonFactoryGenerators,
    MicroPythonBlynkGenerators,
    MicroPythonCCG1Generators,
    MicroPythonCEGOGenerators,
    MicropythonESP32S2InoutGenerators,
    MicropythonESP32S2PinsGenerators
);