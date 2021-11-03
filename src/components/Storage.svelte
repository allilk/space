<script>
	import { formatBytes, getPercentage } from '../helpers/format';

	export let storageObject;

	const { usage, maxSize, title } = storageObject;
</script>

<section>
	<div>
		<span id="source-title">{title}</span>
		<div id="percentage">
			{getPercentage(usage, maxSize) || 0}
			<span id="percent-sign">%</span>
		</div>
	</div>
	<div class="storage-container">
		<div class="storage" style={'width:' + getPercentage(usage, maxSize).toString() + '%'}>
			&nbsp;
		</div>
	</div>
	<div id="space-used">
		{formatBytes(usage)} / {formatBytes(maxSize)}
	</div>
</section>
