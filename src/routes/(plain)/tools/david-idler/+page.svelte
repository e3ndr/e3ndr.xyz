<script>
	import { onMount } from 'svelte';

	const LOCATION = [35.5042, -97.7505];

	let time_h = '';
	let time_m = '';
	let time_s = '';
	let time_ampm = '';
	let weather = 'CLEAR'; // SHOWERS, RAIN, THUNDER, SNOW, CLEAR

	let snowShader = {};

	let temperature = -1;
	let isDay = false;

	$: weather,
		(() => {
			if (typeof window == 'undefined') return;
			if (!document.querySelector('main')) return;
			switch (weather) {
				case 'SHOWERS': {
					snowShader.run = false;
					document.querySelector('main').setAttribute('data-weather', 'drizzle');
					break;
				}
				case 'RAIN': {
					snowShader.run = false;
					document.querySelector('main').setAttribute('data-weather', 'rain');
					break;
				}
				case 'THUNDER': {
					snowShader.run = false;
					document.querySelector('main').setAttribute('data-weather', 'storm');
					break;
				}
				case 'SNOW': {
					snowShader.run = true;
					document.querySelector('main').setAttribute('data-weather', 'sunny');
					break;
				}
				case 'CLEAR':
				default: {
					snowShader.run = false;
					document.querySelector('main').setAttribute('data-weather', 'sunny');
					break;
				}
			}
			window.updateWeather();
		})();

	onMount(() => {
		function padZero(number) {
			return number < 10 ? `0${number}` : number;
		}

		function updateTime() {
			const currentTime = new Date();
			let hours = currentTime.getHours() % 12;
			const minutes = currentTime.getMinutes();
			const seconds = currentTime.getSeconds();

			if (hours == 0) {
				hours = 12;
			}

			time_h = padZero(hours);
			time_m = padZero(minutes);
			time_s = padZero(seconds);

			if (hours > 13) {
				time_ampm = 'PM';
			} else {
				time_ampm = 'AM';
			}
		}

		let interval = setInterval(updateTime, 1000);
		updateTime();
		return () => clearInterval(interval);
	});

	onMount(() => {
		async function updateWeather() {
			const json = await fetch(
				`https://api.open-meteo.com/v1/forecast?latitude=${LOCATION[0]}&longitude=${LOCATION[1]}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1`
			).then((response) => response.json());
			console.debug(json);

			temperature = json.current.temperature_2m;
			isDay = json.current.is_day ? true : false;
		}

		let interval = setInterval(updateWeather, 60 * 1000);
		updateWeather();
		return () => clearInterval(interval);
	});

	onMount(() => {
		async function updateCanvasSize() {
			document.querySelector('#rain-container').width = window.innerWidth;
			document.querySelector('#rain-container').height = window.innerHeight;
		}

		window.test = (w) => (weather = w);

		let interval = setInterval(updateCanvasSize, 5 * 1000);
		updateCanvasSize();
		return () => clearInterval(interval);
	});

	onMount(() => {
		const snowflake =
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTUtMDctMDNUMTg6NTk6MjIrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEyVDE1OjE0OjQwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTAxLTEyVDE1OjE0OjQwKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIzMzBlMWI0LTk5ZDctNGU2NS05MGQ2LTNmYjFiYmE2ZTE0MCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjAyNThjNzMxLTQ4ZjQtYTA0MS1hNGFkLTQ4MTA2MTVjY2FlYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjJjY2VkMTUyLTRjNzAtNDFlZC1hMzcyLWRlOWY4NjgyZTcwMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmNjZWQxNTItNGM3MC00MWVkLWEzNzItZGU5Zjg2ODJlNzAxIiBzdEV2dDp3aGVuPSIyMDE1LTA3LTAzVDE4OjU5OjIyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjMzMGUxYjQtOTlkNy00ZTY1LTkwZDYtM2ZiMWJiYTZlMTQwIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEyVDE1OjE0OjQwKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz50mbqsAAAToElEQVR4nOVbW49dR5X+VlXtc2v3Ne52N6bTTnAc0u02GRJQwEhYQkJ5QhmhPPOUl0iBB/4AP4JfMA95IEIaJEYiQhlesCZMEE1iGxJHIjK21XbSwX1xd5+zd9Va87BrVdfefWwI4xEaUVJpn7PPPnVqfbUu31pVh0QE/8zN/KMn8I9uTl+8+uqrAAARgYgghIBer4dnnnkGAPDFL34RANDr9eiJJ55AVVUgIhhjwMwYDAbY3Nyk8+fPP/DHdnd3ZWtr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';

		const holder = document.querySelector('#snow-container');
		const count = 7000;

		let wind = {
			current: 0,
			force: 0.1,
			target: 0.1,
			min: 0.1,
			max: 0.25,
			easing: 0.005
		};

		snowShader = new ShaderProgram(holder, {
			depthTest: false,
			texture: snowflake,
			uniforms: {
				worldSize: { type: 'vec3', value: [0, 0, 0] },
				gravity: { type: 'float', value: 100 },
				wind: { type: 'float', value: 0 }
			},
			buffers: {
				size: { size: 1, data: [] },
				rotation: { size: 3, data: [] },
				speed: { size: 3, data: [] }
			},
			vertex: `
    precision highp float;

    attribute vec4 a_position;
    attribute vec4 a_color;
    attribute vec3 a_rotation;
    attribute vec3 a_speed;
    attribute float a_size;

    uniform float u_time;
    uniform vec2 u_mousemove;
    uniform vec2 u_resolution;
    uniform mat4 u_projection;
    uniform vec3 u_worldSize;
    uniform float u_gravity;
    uniform float u_wind;

    varying vec4 v_color;
    varying float v_rotation;

    void main() {

      v_color = a_color;
      v_rotation = a_rotation.x + u_time * a_rotation.y;

      vec3 pos = a_position.xyz;

      pos.x = mod(pos.x + u_time + u_wind * a_speed.x, u_worldSize.x * 2.0) - u_worldSize.x;
      pos.y = mod(pos.y - u_time * a_speed.y * u_gravity, u_worldSize.y * 2.0) - u_worldSize.y;

      pos.x += sin(u_time * a_speed.z) * a_rotation.z;
      pos.z += cos(u_time * a_speed.z) * a_rotation.z;

      gl_Position = u_projection * vec4( pos.xyz, a_position.w );
      gl_PointSize = ( a_size / gl_Position.w ) * 100.0;

    }`,
			fragment: `
    precision highp float;

    uniform sampler2D u_texture;

    varying vec4 v_color;
    varying float v_rotation;

    void main() {

      vec2 rotated = vec2(
        cos(v_rotation) * (gl_PointCoord.x - 0.5) + sin(v_rotation) * (gl_PointCoord.y - 0.5) + 0.5,
        cos(v_rotation) * (gl_PointCoord.y - 0.5) - sin(v_rotation) * (gl_PointCoord.x - 0.5) + 0.5
      );

      vec4 snowflake = texture2D(u_texture, rotated);

      gl_FragColor = vec4(snowflake.rgb, snowflake.a * v_color.a);

    }`,
			onResize(w, h, dpi) {
				const position = [],
					color = [],
					size = [],
					rotation = [],
					speed = [];

				// z in range from -80 to 80, camera distance is 100
				// max height at z of -80 is 110
				const height = 110;
				const width = (w / h) * height;
				const depth = 80;

				Array.from({ length: (w / h) * count }, (snowflake) => {
					position.push(
						-width + Math.random() * width * 2,
						-height + Math.random() * height * 2,
						Math.random() * depth * 2
					);

					speed.push(
						// 0, 0, 0 )
						1 + Math.random(),
						1 + Math.random(),
						Math.random() * 10
					); // x, y, sinusoid

					rotation.push(Math.random() * 2 * Math.PI, Math.random() * 20, Math.random() * 10); // angle, speed, sinusoid

					color.push(1, 1, 1, 0.1 + Math.random() * 0.2);

					size.push(5 * Math.random() * 5 * ((h * dpi) / 1000));
				});

				this.uniforms.worldSize = [width, height, depth];

				this.buffers.position = position;
				this.buffers.color = color;
				this.buffers.rotation = rotation;
				this.buffers.size = size;
				this.buffers.speed = speed;
			},
			onUpdate(delta) {
				wind.force += (wind.target - wind.force) * wind.easing;
				wind.current += wind.force * (delta * 0.2);
				this.uniforms.wind = wind.current;

				if (Math.random() > 0.995) {
					wind.target =
						(wind.min + Math.random() * (wind.max - wind.min)) * (Math.random() > 0.5 ? -1 : 1);
				}
			}
		});
	});
</script>

<svelte:head>
	<script src="/js/RainEffect.js"></script>
	<script src="/js/ShaderProgram.js"></script>
</svelte:head>

<div class="hidden">
	<img src="/images/RainEffect/drop-color.png" alt="" />
	<img src="/images/RainEffect/drop-alpha.png" alt="" />
	<img src="/images/RainEffect/weather/texture-rain-fg.png" alt="" />
	<img src="/images/RainEffect/weather/texture-rain-bg.png" alt="" />
	<img src="/images/RainEffect/weather/texture-sun-fg.png" alt="" />
	<img src="/images/RainEffect/weather/texture-sun-bg.png" alt="" />
	<img src="/images/RainEffect/weather/texture-fallout-fg.png" alt="" />
	<img src="/images/RainEffect/weather/texture-fallout-bg.png" alt="" />
	<img src="/images/RainEffect/weather/texture-drizzle-fg.png" alt="" />
	<img src="/images/RainEffect/weather/texture-drizzle-bg.png" alt="" />
</div>

<main class="relative h-full" class:day={isDay} class:night={!isDay} data-weather="sunny">
	<canvas id="rain-container" class="absolute inset-0" />
	<div id="snow-container" class="absolute inset-0" class:opacity-0={weather != 'SNOW'} />

	<div class="absolute inset-0 flex items-center justify-center drop-shadow-md">
		<div class="w-fit text-[10rem] flex space-x-2">
			<span class="inline-block w-[2ch]">{time_h}</span>
			<span class="inline-block -translate-x-0.5">:</span>
			<span class="inline-block w-[2ch]">{time_m}</span>
			<span class="inline-block -translate-x-1">:</span>
			<span class="inline-block w-[2ch]">{time_s}</span>
			<span class="inline-block text-[.5em] translate-y-[1em]">{time_ampm}</span>
		</div>

		<span class="absolute left-4 bottom-2 text-[4rem]">
			<span>{temperature.toFixed(0)}</span><span
				class="inline-block text-[.5em] -translate-y-[.8em]">&deg;</span
			><span class="inline-block text-[.25em] -translate-y-[2.45em]">F</span>
		</span>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Reenie+Beanie&display=swap');

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	main {
		/* background-color: white; */
		font-family: 'Oswald';
		overflow: hidden;
		color: #fff1de;
	}

	/* main.day {
		color: #815c34;
	} */

	/* main.day::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
		background: url('https://unsplash.com/photos/w3SiA2lDMig/download');
		background-position: center;
		background-size: 100%;
	} */

	/* main canvas {
		color: #fff1de;
	} */

	/* main.night::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
		background: url('https://unsplash.com/photos/bhiQQm1urPI/download');
		background-position: center;
		background-size: 100%;
	} */
</style>
