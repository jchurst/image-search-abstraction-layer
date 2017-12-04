'use strict';

var got = require('got');
var GoogleImages = require('google-images');
var apiKey = process.env.CSE;
var id = process.env.API;


/**
 * Google Images Client
 */

function Client (id, apiKey) {
	if (!(this instanceof Client)) {
		return new Client(id, apiKey);
	}

	this.endpoint = 'https://www.googleapis.com';
	this.apiKey = apiKey;
	this.id = id;
}

Client.prototype.search = function (query, options) {
	if (!query) {
		throw new TypeError('Expected a query');
	}

	return got(this.endpoint + '/customsearch/v1', {
		query: this._buildOptions(query, options),
		json: true
	}).then(this._buildResponse);
};

Client.prototype._buildOptions = function (query, options) {
	if (!options) {
		options = {};
	}

	var result = {
		q: query.replace(/\s/g, '+'),
		searchType: 'image',
		cx: this.id,
		key: this.apiKey
	};

	if (options.page) {
		result.start = options.page;
	}

	if (options.size) {
		result.imgSize = options.size;
	}

	return result;
};

Client.prototype._buildResponse = function (res) {
	
	return res.body.items.map(function (item) {
		
		return {
			type: item.mime,
			snippet: item.snippet,
			context: item.image.contextLink,
			width: item.image.width,
			height: item.image.height,
			size: item.image.byteSize,
			url: item.link,
			thumbnail: {
				url: item.image.thumbnailLink,
				width: item.image.thumbnailWidth,
				height: item.image.thumbnailHeight
			}
		};
	});
};


/**
 * Expose client
 */

module.exports = Client;
