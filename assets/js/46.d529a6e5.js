(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{457:function(e,t,r){"use strict";r.r(t);var a=r(44),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nushell-0-34"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-34"}},[e._v("#")]),e._v(" Nushell 0.34")]),e._v(" "),r("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),r("p",[e._v("Today, we're releasing 0.34 of Nu. This release is the first to support dataframes and also includes a set of usability improvements.")]),e._v(" "),r("h1",{attrs:{id:"where-to-get-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),r("p",[e._v("Nu 0.34 is available as "),r("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.34.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),r("OutboundLink")],1),e._v(" or from "),r("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),r("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),r("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),r("p",[e._v("If you want all the goodies, you can install "),r("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),r("p",[e._v("If you'd like to try the experimental paging feature in this release, you can install with "),r("code",[e._v("cargo install nu --features=table-pager")]),e._v(".")]),e._v(" "),r("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),r("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),r("h1",{attrs:{id:"what-s-new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),r("h2",{attrs:{id:"dataframes-elferherrera"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dataframes-elferherrera"}},[e._v("#")]),e._v(" Dataframes (elferherrera)")]),e._v(" "),r("p",[e._v("With 0.34, we've introduced a new family of commands to work with dataframes. Dataframes are an efficient way of working with large datasets by storing data as columns and offering a set of operations over them.")]),e._v(" "),r("p",[e._v("To create a dataframe, you can use the "),r("code",[e._v("dataframe open")]),e._v(" command and pass it a source file to load. This command currently supports CSV and parquet files.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> let df = (dataframe open .\\Data7602DescendingYearOrder.csv)\n")])])]),r("p",[e._v("Once loaded, there are a variety of commands you can use to interact with the dataframe (you can get the full list with "),r("code",[e._v("dataframe --help")]),e._v("). For example, to see the first few rows of the dataframe we just loaded, we can use "),r("code",[e._v("dataframe first")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> $df | dataframe first\n\n───┬──────────┬─────────┬──────┬───────────┬──────────\n # │ anzsic06 │  Area   │ year │ geo_count │ ec_count\n───┼──────────┼─────────┼──────┼───────────┼──────────\n 0 │ A        │ A100100 │ 2000 │        96 │      130\n 1 │ A        │ A100200 │ 2000 │       198 │      110\n 2 │ A        │ A100300 │ 2000 │        42 │       25\n 3 │ A        │ A100400 │ 2000 │        66 │       40\n 4 │ A        │ A100500 │ 2000 │        63 │       40\n───┴──────────┴─────────┴──────┴───────────┴──────────\n")])])]),r("p",[e._v("Where dataframes really shine is their performance.")]),e._v(" "),r("p",[e._v("For example, the above dataset is 5 columns and ~5.5 million rows of data. We're able to process group it by the year column, sum the results, and display it to the user in 557ms:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# process.nu\nlet df = (dataframe open Data7602DescendingYearOrder.csv)\nlet res = ($df | dataframe group-by year | dataframe aggregate sum | dataframe select geo_count)\n$res\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> benchmark {source process.nu}\n\n───┬───────────────────\n # │     real time\n───┼───────────────────\n 0 │ 557ms 658us 500ns\n───┴───────────────────\n")])])]),r("p",[e._v("By comparison, here's the same example in pandas:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('import pandas as pd\n\ndf = pd.read_csv("Data7602DescendingYearOrder.csv")\nres = df.groupby("year")["geo_count"].sum()\nprint(res)\n')])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> benchmark {python .\\load.py}\n\n───┬────────────────────────\n # │       real time\n───┼────────────────────────\n 0 │ 1sec 966ms 954us 800ns\n───┴────────────────────────\n")])])]),r("blockquote",[r("p",[e._v("System Details: The benchmarks presented in this section were run using a machine with a processor Intel(R) Core(TM) i7-10710U (CPU @1.10GHz 1.61 GHz) and 16 gb of RAM.")])]),e._v(" "),r("p",[e._v("While these results are still early, we're excited to see what can be possible using Nushell for processing large datasets.")]),e._v(" "),r("p",[e._v("You can learn more about dataframes, including many examples and a much more in-depth explanation, by reading the new "),r("a",{attrs:{href:"https://www.nushell.sh/book/dataframes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("dataframes chapter of the Nushell book"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Note: while all the dataframe functionality is currently grouped behind the "),r("code",[e._v("dataframe")]),e._v(" top-level command, we hope to extend support for dataframes to other common Nushell commands.")]),e._v(" "),r("h2",{attrs:{id:"improved-multiline-support-jt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#improved-multiline-support-jt"}},[e._v("#")]),e._v(" Improved multiline support (jt)")]),e._v(" "),r("p",[e._v("We've extended multiline expression support to more areas. Now, you can span tables over multiple lines more naturally:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[\n  [name, value];\n  [foo, 2]\n  [bar, 7]\n]\n")])])]),r("p",[e._v("Subexpression now also span multiple lines. Everything inside of the parentheses are treated as if they were written together:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("(echo foo\n| str length)\n")])])]),r("p",[e._v("This also gives you a way to split up commands that have many arguments over multiple lines:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("(echo foo\nbar)\n")])])]),r("h2",{attrs:{id:"multiple-shorthand-environment-vars-jt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multiple-shorthand-environment-vars-jt"}},[e._v("#")]),e._v(" Multiple shorthand environment vars (jt)")]),e._v(" "),r("p",[e._v("A long-time shortcoming is now fixed in 0.34. You can now pass multiple environment shorthands to the same command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> FOO=bar BAR=baz $nu.env.FOO + $nu.env.BAR\nbarbaz\n")])])]),r("h2",{attrs:{id:"variable-completions-andrasio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#variable-completions-andrasio"}},[e._v("#")]),e._v(" Variable completions (andrasio)")]),e._v(" "),r("p",[e._v("In addition to steadily improving the completion engine, we've started adding support for completions for built-in variables.")]),e._v(" "),r("p",[e._v("You can now write "),r("code",[e._v("$nu.<TAB>")]),e._v(" to complete into the built-in "),r("code",[e._v("$nu")]),e._v(" variable, including completions for "),r("code",[e._v("$nu.env.S<TAB>")]),e._v(" for completing into environment variables.")]),e._v(" "),r("p",[e._v("Other variables that are in scope can also have their names completed.")]),e._v(" "),r("h2",{attrs:{id:"new-commands"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-commands"}},[e._v("#")]),e._v(" New commands")]),e._v(" "),r("ul",[r("li",[e._v("Added the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3670",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("pathvar")]),e._v(" command for updating the PATH"),r("OutboundLink")],1),e._v(" (nathom)")]),e._v(" "),r("li",[e._v("Added a "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3694",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("paste")]),e._v(" command for pasting from clipboard"),r("OutboundLink")],1),e._v(" (1ntEgr8)")]),e._v(" "),r("li",[e._v("Added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3720",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("$nu.lang")]),e._v(" to reflect on the current commands"),r("OutboundLink")],1),e._v(" (fdncred)")])]),e._v(" "),r("h2",{attrs:{id:"additional-improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#additional-improvements"}},[e._v("#")]),e._v(" Additional improvements")]),e._v(" "),r("ul",[r("li",[e._v("Updated "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3758",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("into binary")]),e._v(" to be more composible"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("Added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3754",target:"_blank",rel:"noopener noreferrer"}},[e._v("unique option to "),r("code",[e._v("uniq")]),r("OutboundLink")],1),e._v(" (mcbattirola)")]),e._v(" "),r("li",[e._v("Removed an "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3751",target:"_blank",rel:"noopener noreferrer"}},[e._v("outdated README note"),r("OutboundLink")],1),e._v(" (yaymukund)")]),e._v(" "),r("li",[e._v("Added more "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3750",target:"_blank",rel:"noopener noreferrer"}},[e._v("comparsion coercions with "),r("code",[e._v("$nothing")]),r("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),r("li",[e._v("Updated the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3749",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("version")]),e._v(" command to output more info"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("Fixed a "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3745",target:"_blank",rel:"noopener noreferrer"}},[e._v("broken unit test"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("Downgraded "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3740",target:"_blank",rel:"noopener noreferrer"}},[e._v("crossterm to fix pager compilation"),r("OutboundLink")],1),e._v(" (kubouch)")]),e._v(" "),r("li",[e._v("Removed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3732",target:"_blank",rel:"noopener noreferrer"}},[e._v("unused crate features"),r("OutboundLink")],1),e._v(" (waywardmonkeys)")]),e._v(" "),r("li",[e._v("Updated a few "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3723",target:"_blank",rel:"noopener noreferrer"}},[e._v("dependencies"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3724",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3739",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3741",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3757",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" (therealprof, waywardmonkeys)")]),e._v(" "),r("li",[e._v("Added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3722",target:"_blank",rel:"noopener noreferrer"}},[e._v("dataframe take command"),r("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),r("li",[e._v("Added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3717",target:"_blank",rel:"noopener noreferrer"}},[e._v("script to submit winget package during release"),r("OutboundLink")],1),e._v(" (TechWatching)")]),e._v(" "),r("li",[e._v("Aligned "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3713",target:"_blank",rel:"noopener noreferrer"}},[e._v("dataframe params to match other Nushell commands"),r("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),r("li",[e._v("Added the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3712",target:"_blank",rel:"noopener noreferrer"}},[e._v("ansi osc string terminator"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("Removed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3709",target:"_blank",rel:"noopener noreferrer"}},[e._v("unused dependencies"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3716",target:"_blank",rel:"noopener noreferrer"}},[e._v("also"),r("OutboundLink")],1),e._v(" (waywardmonkeys, andrasio)")]),e._v(" "),r("li",[e._v("Added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3702",target:"_blank",rel:"noopener noreferrer"}},[e._v("casting operations for Series data"),r("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),r("li",[e._v("Fixed a "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3697",target:"_blank",rel:"noopener noreferrer"}},[e._v("dataframe series bug with f64"),r("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),r("li",[e._v("Added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3696",target:"_blank",rel:"noopener noreferrer"}},[e._v("all-trim option to "),r("code",[e._v("str trim")]),r("OutboundLink")],1),e._v(" (palashahuja)")]),e._v(" "),r("li",[e._v("Ported more commands to engine-p "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3690",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3753",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),r("OutboundLink")],1),e._v("  (efx)")]),e._v(" "),r("li",[e._v("Added support for "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3688",target:"_blank",rel:"noopener noreferrer"}},[e._v("arbitrarily nested subcommands"),r("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),r("li",[e._v("Added support for "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3686",target:"_blank",rel:"noopener noreferrer"}},[e._v("string interpolation when calling externals"),r("OutboundLink")],1),e._v(" (voanhduy1512)")]),e._v(" "),r("li",[e._v("Made "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3684",target:"_blank",rel:"noopener noreferrer"}},[e._v("URL docs more consistent"),r("OutboundLink")],1),e._v(" (efx)")]),e._v(" "),r("li",[e._v("Speed up "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3683",target:"_blank",rel:"noopener noreferrer"}},[e._v("dataframe loading"),r("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),r("li",[e._v("Improved "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3681",target:"_blank",rel:"noopener noreferrer"}},[e._v("parse errors for "),r("code",[e._v("def")]),r("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),r("li",[e._v("Updated textview to "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3680",target:"_blank",rel:"noopener noreferrer"}},[e._v("always read its input from the stream"),r("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),r("li",[e._v("Dataframe aggregation uses "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3678",target:"_blank",rel:"noopener noreferrer"}},[e._v("simpler column names"),r("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),r("li",[e._v("Add support for more "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3675",target:"_blank",rel:"noopener noreferrer"}},[e._v("filesize to filesize math"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("Updated the Nu API surface to "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3673",target:"_blank",rel:"noopener noreferrer"}},[e._v("expose more useful functionality"),r("OutboundLink")],1),e._v(" (stormasm)")]),e._v(" "),r("li",[e._v("Fixed a "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3669",target:"_blank",rel:"noopener noreferrer"}},[e._v("panic during math with large durations"),r("OutboundLink")],1),e._v(" (luccasmmg)")])]),e._v(" "),r("h1",{attrs:{id:"looking-ahead"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#looking-ahead"}},[e._v("#")]),e._v(" Looking ahead")]),e._v(" "),r("p",[e._v("Work on "),r("a",{attrs:{href:"https://github.com/jntrnr/reedline",target:"_blank",rel:"noopener noreferrer"}},[e._v("reedline"),r("OutboundLink")],1),e._v(" has steadily grow in the background, and is now nearing the time where we will explore integrating it into Nushell as Nushell's line editor.")]),e._v(" "),r("p",[e._v("We're also working on a number of "),r("a",{attrs:{href:"https://github.com/jntrnr/engine-q",target:"_blank",rel:"noopener noreferrer"}},[e._v("parser and engine improvements"),r("OutboundLink")],1),e._v(" which we hope will make their way into future version of Nushell.")]),e._v(" "),r("p",[e._v("Dataframe support continues to grow, and we're continuing to collaborate with projects that this builds on to ensure we are using the best techniques possible. There's a lot of potential here not only in terms of using dataframes, but where the Apache Arrow support might allow us to grow additional functionality in the future.")])])}),[],!1,null,null,null);t.default=n.exports}}]);