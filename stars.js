<script>
const f = function(m) {
		if(m === 0){
			return "";
		}
			return " " + f(m - 1);
	};
	const a = function(n) {
		if(n === 0) {
			return "";
		}
			return "*" + a(n - 1);
	};
	const b = function(m, n, k) {
		if(k === 0) {
			return "";
		}
			console.log(f(m) + a(n));
			b(m-1, n + 2, k-1);
	};
	const triangleStar = function(k) {
		b(k-1, 1, k);
	};

	triangleStar(5);
</script>