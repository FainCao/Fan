var num = this.activeTabs
contrast([
	[{
		['lower']: '0x100000000',
		['upper']: '0x200000000',
		['flags']: 'F32',
		['number']: 0.2,
	}, ],
	[{
			['flags']: 'F32',
			['offset']: -4,
			['value']: 2
		},
		{
			['flags']: 'F32',
			['offset']: 4,
			['value']: 0
		},
		// { ['flags']: 'F32', ['offset']: 8, ['value']: 0 },
	]
]);

var results = contrastR

if (results.length > 0) {

	attResults = results[0].address;
	[add_a, add_b, add_c, add_d] = [(Number(attResults) + 0), (Number(attResults) + 8), (Number(attResults) + 84), (
		Number(attResults) + 130)];

	if (num == 1) {
		locker1 = setInterval(function() {
				h5gg.setValue(add_a, 4294967295, "I32");
				h5gg.setValue(add_b, Number(edit_value), "F32");
				h5gg.setValue(add_c, 1000000000, "F32");
				h5gg.setValue(add_d, 1000000000, "F32");
			},
			500
		);
	} else {
		h5gg.setValue(add_a, 4294967295, "I32");
		h5gg.setValue(add_b, Number(edit_value), "F32");
		h5gg.setValue(add_c, 1000000000, "F32");
		h5gg.setValue(add_d, 1000000000, "F32");
	}