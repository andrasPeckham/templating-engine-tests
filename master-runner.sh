#!/bin/bash

commands=(
    "node templating-tests/ejs/runner.js"
    "node templating-tests/handlebars/runner.js"
    "node templating-tests/mustache/runner.js"
    "node templating-tests/nunjucks/runner.js"
    "node templating-tests/pug/runner.js"
    "node templating-tests/eta/runner.js"
    "node templating-tests/react/runner.js"
    "npx babel templating-tests/react/MyComponent.jsx --out-file templating-tests/react/MyComponent.js"
)
runs=100

echo "Running tests ${runs} times"
for ((i=0; i<${#commands[@]}; i++)); do
    total_time=0
    for ((j=0; j<$runs; j++)); do
        execution_time=$( { time ${commands[$i]} >/dev/null; } 2>&1 | grep real | cut -d' ' -f2 | cut -d'm' -f2 | cut -d's' -f1 )
        total_time=$(echo "$total_time + $execution_time" | bc)
    done
    average_time=$(echo "scale=3; $total_time / $runs" | bc)
    echo "Command $((i+1)): ${commands[$i]} - average execution time over $runs runs: $average_time seconds"
done