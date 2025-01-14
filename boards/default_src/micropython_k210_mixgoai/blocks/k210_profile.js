const pins = {};

pins['k210'] = {
    description: "MicroPython[K210_MixGo AI]",
    digital_pin: [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P6", "6"], ["P7", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"], ["P11", "11"], ["P12", "12"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P17", "17"], ["P18", "18"], ["P19", "19"], ["P20", "20"], ["P21", "21"], ["P22", "22"], ["P23", "23"], ["P24", "24"], ["P25", "25"]],
    digital: [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P6", "6"], ["P7", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"], ["P11", "11"], ["P12", "12"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P17", "17"], ["P18", "18"], ["P19", "19"], ["P20", "20"], ["P21", "21"], ["P22", "22"], ["P23", "23"], ["P24", "24"], ["P25", "25"], ["P30", "30"], ["P31", "31"], ["P32", "32"], ["P33", "33"], ["P34", "34"], ["P35", "35"]],
    button: [["A", "button_a"], ["B", "button_b"]],
    axis: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]],
    exlcdh: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
    exlcdv: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]],
    serial_pin: [["pin0", "0"], ["pin1", "1"], ["pin2", "2"], ["pin8", "8"], ["pin12", "12"], ["pin13", "13"], ["pin14", "14"], ["pin15", "15"], ["pin16", "16"]],
    radio_power: [['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7']],
    radio_datarate: [["1Mbit", "RATE_1MBIT"], ["250Kbit", "RATE_250KBIT"], ["2Mbit", "RATE_2MBIT"]],
    one_more: [["ONE_SHOT", "ONE_SHOT"], ["PERIODIC", "PERIODIC"]],
};

pins["MixGo AI"] = pins["k210"];

export default pins;