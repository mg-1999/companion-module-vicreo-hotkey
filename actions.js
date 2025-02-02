exports.getActions = (self) => {
	let actions = {
		singleKey: {
			label: 'Hot(single)key',
			options: [
				{
					type: 'textinput',
					label: 'Single key to send',
					id: 'singleKey',
					default: 'z',
					regex: '/^.$/',
				},
			],
		},
		specialKey: {
			label: 'special key',
			options: [
				{
					type: 'dropdown',
					label: 'Special key to send',
					id: 'specialKey',
					default: 'enter',
					choices: self.CHOICES_KEYS,
				},
			],
		},
		combination: {
			label: 'Combination',
			options: [
				{
					type: 'dropdown',
					label: 'Modifier',
					id: 'key1',
					default: 'control',
					choices: self.MODIFIER_KEYS,
				},
				{
					type: 'textinput',
					label: '(Special) Key',
					id: 'key2',
					default: 'c',
				},
			],
		},
		trio: {
			label: 'Three key (trio, pro-action)',
			options: [
				{
					type: 'dropdown',
					label: 'First modifier',
					id: 'key1',
					default: 'control',
					choices: self.MODIFIER_KEYS,
				},
				{
					type: 'dropdown',
					label: 'Second modifier',
					id: 'key2',
					default: 'shift',
					choices: self.MODIFIER_KEYS,
				},
				{
					type: 'textinput',
					label: '(Special) Key',
					id: 'key3',
					default: 'a',
				},
			],
		},
		quartet: {
			label: 'Four keys (quartet, pro-action)',
			options: [
				{
					type: 'dropdown',
					label: 'First modifier',
					id: 'key1',
					default: 'control',
					choices: self.MODIFIER_KEYS,
				},
				{
					type: 'dropdown',
					label: 'Second modifier',
					id: 'key2',
					default: 'shift',
					choices: self.MODIFIER_KEYS,
				},
				{
					type: 'dropdown',
					label: 'Third modifier',
					id: 'key3',
					default: 'alt',
					choices: self.MODIFIER_KEYS,
				},
				{
					type: 'textinput',
					label: '(Special) Key',
					id: 'key4',
					default: 'a',
				},
			],
		},
		press: {
			label: 'Key press',
			options: [
				{
					type: 'textinput',
					label: 'Key to press',
					id: 'keyPress',
				},
			],
		},
		release: {
			label: 'Key release',
			options: [
				{
					type: 'textinput',
					label: 'Key to release',
					id: 'keyRelease',
				},
			],
		},
		mousePosition: {
			label: 'Change mouse position (pro-action)',
			options: [
				{
					type: 'textwithvariables',
					label: 'X-coordinate',
					id: 'x',
					default: 100,
					width: 6
				},
				{
					type: 'textwithvariables',
					label: 'Y-coordinate',
					id: 'y',
					default: 100,
					width: 6
				},
			],
		},
		mouseClick: {
			label: 'Click the mouse (pro-action)',
			options: [
				{
					type: 'dropdown',
					label: 'Which button',
					id: 'button',
					default: 'left',
					choices: [{ id: 'left', label: 'Left' },{ id: 'right', label: 'Right' },{ id: 'middle', label: 'Middle' }],
				},
				{
					type: 'dropdown',
					label: 'Double click?',
					id: 'double',
					default: 'false',
					choices: [{ id: 'false', label: 'Single click' },{ id: 'true', label: 'Double click' }],
				},
			],
		},
		getMousePosition: {
			label: 'Get the position of the mouse on screen',
			options: [],
		},
		msg: {
			label: 'Send stringmessage',
			options: [
				{
					type: 'textinput',
					label: 'Type message',
					id: 'msg',
				},
			],
		},
		shell: {
			label: 'Send shell command (pro-action)',
			options: [
				{
					type: 'textinput',
					label: 'Type command',
					id: 'shell',
				},
			],
		},
		file: {
			label: 'Open a file (pro-action)',
			options: [
				{
					type: 'textinput',
					label: 'Complete file path, surround by " (read help file)',
					id: 'file',
				},
			],
		},
		sendKeypressToProcess: {
			label: 'Send KeyPress To MacOS Process (pro-action)',
			options: [
				{
					type: 'textinput',
					label: 'Process Search String',
					id: 'processSearchString',
					default: 'Microsoft PowerPoint',
				},
				{
					type: 'dropdown',
					label: 'Virtual KeyCode',
					id: 'virtualKeyCode',
					default: '0x00',
					choices: self.VIRTUAL_KEYCODES_ANSI,
					minChoicesForSearch: 0,
				},
				{
					type: 'dropdown',
					label: 'Combine with modifier 1',
					id: 'modifier1',
					default: 'none',
					choices: self.MODIFIER_KEYS,
				},
				{
					type: 'dropdown',
					label: 'Combine with modifier 2',
					id: 'modifier2',
					default: 'none',
					choices: self.MODIFIER_KEYS,
				},
			],
		},
		specialKeyOS: {
			label: 'special key OS dependent (pro-action)',
			options: [
				{
					type: 'dropdown',
					label: 'Special key to send',
					id: 'specialKey',
					default: 'audio_mute',
					choices: self.CHOICES_KEYS_SPECIALS,
				},
			],
		},
		subscribe: {
			label: 'Subscribe to data (pro-action)',
			options: [
				{
					type: 'dropdown',
					label: 'Subscribe',
					id: 'subscribe',
					default: 'subscribe',
					choices: [{ id: 'subscribe', label: 'Subscribe' },{ id: 'unsubscribe', label: 'Unsubscribe' }],
				},
				{
					type: 'dropdown',
					label: 'Object',
					id: 'name',
					default: 'mousePosition',
					choices: [{ id: 'mousePosition', label: 'mouse position' }],
				},
				{
					type: 'number',
					label: 'Interval',
					id: 'interval',
					default: 1000,
				}
			]
		},
		custom: {
			label: 'Custom action (pro-action)',
			options: [
				{
					type: 'textinput',
					label: 'Custom message',
					id: 'custom',
					default: '{"type":}',
				},
			]
		},
	}

	return actions
}
