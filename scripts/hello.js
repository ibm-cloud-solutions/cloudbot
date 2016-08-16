// Description:
//	Say hi to your bot and have it greet you back
//
// Configuration:
//
// Commands:
//   hubot hello - Greet your bot
//
// Author:
//	chambrid
//
/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2016. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
'use strict';

const HI_REGEX = /(hi|hello|hey|hiya|sup|howdy|yo)/i;
const HI_ID = 'hubot.hi';

const path = require('path');
const TAG = path.basename(__filename);

const greetings = ['Hello', 'Hi', 'Hey', 'Hiya', 'Sup', 'Howdy', 'Yo'];

module.exports = robot => {

	robot.respond(HI_REGEX, {id: HI_ID}, (res) => {
		robot.logger.debug(`${TAG}: hubot-hi`);
		let selection = Math.floor((Math.random() * 7));
		res.reply(greetings[selection]);
	});

};
