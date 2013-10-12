console.log("embed.js");

(function(global) {

    var host = "/";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "54dc3203-e563-4c0c-8f1e-4f252c1d9941"}, {"type": "DataRange1d", "id": "a95947b1-8ff3-4210-a204-12a85e2751f3"}], "dimensions": ["width", "height"], "id": "06b1cf4c-8056-458a-a693-d0e5431eb3f2"}, "type": "ZoomTool", "id": "06b1cf4c-8056-458a-a693-d0e5431eb3f2"}, {"attributes": {"plot": {"type": "Plot", "id": "871e3c14-f3ca-4faa-826e-d1401d85246d"}, "doc": null, "dimension": 0, "id": "26b28953-11a2-41d6-8dd0-2f3065c2aba5"}, "type": "Grid", "id": "26b28953-11a2-41d6-8dd0-2f3065c2aba5"}, {"attributes": {"plot": {"type": "Plot", "id": "4f77e625-a36d-4971-bff5-eb6b30e4d3f3"}, "doc": null, "dimension": 0, "id": "924c49af-db5d-4585-9dec-f4e0e31048c1"}, "type": "Grid", "id": "924c49af-db5d-4585-9dec-f4e0e31048c1"}, {"attributes": {"plot": {"type": "Plot", "id": "c3fc9ed9-2c7d-4956-9e82-a83531730a73"}, "id": "ea0610b7-e867-4795-94a1-b5e290c95eed", "doc": null}, "type": "ResizeTool", "id": "ea0610b7-e867-4795-94a1-b5e290c95eed"}, {"attributes": {"plot": {"type": "Plot", "id": "871e3c14-f3ca-4faa-826e-d1401d85246d"}, "location": "min", "bounds": "auto", "doc": null, "id": "f0727550-9a6c-433d-990f-37ce870e9882", "dimension": 0}, "type": "LinearAxis", "id": "f0727550-9a6c-433d-990f-37ce870e9882"}, {"attributes": {"plot": {"type": "Plot", "id": "c3fc9ed9-2c7d-4956-9e82-a83531730a73"}, "location": "min", "bounds": "auto", "doc": null, "id": "f51c48d6-8a80-41cb-9b3e-2fe9108891c7", "dimension": 1}, "type": "LinearAxis", "id": "f51c48d6-8a80-41cb-9b3e-2fe9108891c7"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "1791191a-bd21-44e1-95cb-22b8ecc9bca9"}, "columns": ["x"]}], "id": "841a06f6-7715-4f07-a374-e8e34a5a1a54", "doc": null}, "type": "DataRange1d", "id": "841a06f6-7715-4f07-a374-e8e34a5a1a54"}, {"attributes": {"plot": {"type": "Plot", "id": "4f77e625-a36d-4971-bff5-eb6b30e4d3f3"}, "location": "min", "bounds": "auto", "doc": null, "id": "8bc31a0e-d198-4514-b2ac-6e754b9522f7", "dimension": 0}, "type": "LinearAxis", "id": "8bc31a0e-d198-4514-b2ac-6e754b9522f7"}, {"attributes": {"plot": {"type": "Plot", "id": "871e3c14-f3ca-4faa-826e-d1401d85246d"}, "location": "min", "bounds": "auto", "doc": null, "id": "7ce8fa98-d2af-4852-b0a9-fc4358ef084f", "dimension": 1}, "type": "LinearAxis", "id": "7ce8fa98-d2af-4852-b0a9-fc4358ef084f"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "doc": null, "dimension": 0, "id": "c2052121-1fdb-4c52-8398-bd3f7b445de6"}, "type": "Grid", "id": "c2052121-1fdb-4c52-8398-bd3f7b445de6"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "e40ccc27-0169-4459-820a-4c9c536b4459"}, {"type": "DataRange1d", "id": "6a517425-deac-4cd0-a400-f41d77a16135"}], "dimensions": ["width", "height"], "id": "5f5ba3d1-4ef9-4893-9713-8519f89ce53c"}, "type": "ZoomTool", "id": "5f5ba3d1-4ef9-4893-9713-8519f89ce53c"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "16696328-25eb-465b-9474-c4c5e2bdaf9f"}, "type": "ColumnDataSource", "id": "16696328-25eb-465b-9474-c4c5e2bdaf9f"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "86448115-d50b-44de-b978-e4c5590661cc"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "3095934a-e8ff-4f98-ad20-e583d5560009"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "abf70536-b020-44a1-a80d-77ca77de6fe6"}, {"type": "LinearAxis", "id": "f51c48d6-8a80-41cb-9b3e-2fe9108891c7"}, {"type": "Grid", "id": "504972bd-60d2-494f-9931-614ba998ff89"}, {"type": "Grid", "id": "653135a1-b4be-4634-b51e-3343a8e05e25"}, {"type": "GlyphRenderer", "id": "61e2fbd7-a0ef-43c4-bc1d-3846e6ef43bf"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "c3fc9ed9-2c7d-4956-9e82-a83531730a73", "tools": [{"type": "PanTool", "id": "45b306de-0d62-47f2-97ab-e25facce7a8d"}, {"type": "ZoomTool", "id": "20cdda19-54dd-49c2-a111-6fe473380003"}, {"type": "ResizeTool", "id": "ea0610b7-e867-4795-94a1-b5e290c95eed"}], "canvas_width": 600}, "type": "Plot", "id": "c3fc9ed9-2c7d-4956-9e82-a83531730a73"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "001189e6-7e70-41ce-bb3d-9be8ff382cc6", "dimension": 1}, "type": "LinearAxis", "id": "001189e6-7e70-41ce-bb3d-9be8ff382cc6"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "86448115-d50b-44de-b978-e4c5590661cc"}, {"type": "DataRange1d", "id": "3095934a-e8ff-4f98-ad20-e583d5560009"}], "dimensions": ["width", "height"], "doc": null, "id": "45b306de-0d62-47f2-97ab-e25facce7a8d"}, "type": "PanTool", "id": "45b306de-0d62-47f2-97ab-e25facce7a8d"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "c3fc9ed9-2c7d-4956-9e82-a83531730a73"}, {"type": "Plot", "id": "4f77e625-a36d-4971-bff5-eb6b30e4d3f3"}, {"type": "Plot", "id": "871e3c14-f3ca-4faa-826e-d1401d85246d"}, {"type": "Plot", "id": "scatter_example"}], "id": "242dad9f-6928-44d6-b884-d47f998734d8"}, "type": "PlotContext", "id": "242dad9f-6928-44d6-b884-d47f998734d8"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "1791191a-bd21-44e1-95cb-22b8ecc9bca9"}, "type": "ColumnDataSource", "id": "1791191a-bd21-44e1-95cb-22b8ecc9bca9"}, {"attributes": {"plot": {"type": "Plot", "id": "c3fc9ed9-2c7d-4956-9e82-a83531730a73"}, "doc": null, "dimension": 1, "id": "653135a1-b4be-4634-b51e-3343a8e05e25"}, "type": "Grid", "id": "653135a1-b4be-4634-b51e-3343a8e05e25"}, {"attributes": {"plot": {"type": "Plot", "id": "c3fc9ed9-2c7d-4956-9e82-a83531730a73"}, "doc": null, "dimension": 0, "id": "504972bd-60d2-494f-9931-614ba998ff89"}, "type": "Grid", "id": "504972bd-60d2-494f-9931-614ba998ff89"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "841a06f6-7715-4f07-a374-e8e34a5a1a54"}, {"type": "DataRange1d", "id": "694cc9ed-1564-4546-8141-2c932dc6159b"}], "dimensions": ["width", "height"], "doc": null, "id": "62e22451-c57e-46fa-90bd-6b8ba48f58fa"}, "type": "PanTool", "id": "62e22451-c57e-46fa-90bd-6b8ba48f58fa"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "16696328-25eb-465b-9474-c4c5e2bdaf9f"}, "columns": ["x"]}], "id": "86448115-d50b-44de-b978-e4c5590661cc", "doc": null}, "type": "DataRange1d", "id": "86448115-d50b-44de-b978-e4c5590661cc"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "21367500-0280-48f5-810b-255f5ebe8a80"}, "type": "ColumnDataSource", "id": "21367500-0280-48f5-810b-255f5ebe8a80"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "841a06f6-7715-4f07-a374-e8e34a5a1a54"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "694cc9ed-1564-4546-8141-2c932dc6159b"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "f0727550-9a6c-433d-990f-37ce870e9882"}, {"type": "LinearAxis", "id": "7ce8fa98-d2af-4852-b0a9-fc4358ef084f"}, {"type": "Grid", "id": "26b28953-11a2-41d6-8dd0-2f3065c2aba5"}, {"type": "Grid", "id": "c44423ea-8f53-44f3-87a3-f83c83425179"}, {"type": "GlyphRenderer", "id": "fc5a650e-08d8-4fc0-a5c5-fa34536cd58c"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "871e3c14-f3ca-4faa-826e-d1401d85246d", "tools": [{"type": "PanTool", "id": "62e22451-c57e-46fa-90bd-6b8ba48f58fa"}, {"type": "ZoomTool", "id": "5689cd2d-8941-4d60-98bd-654e11ec4b76"}, {"type": "ResizeTool", "id": "0d12a491-b867-4015-bbd1-8026356475c4"}], "canvas_width": 600}, "type": "Plot", "id": "871e3c14-f3ca-4faa-826e-d1401d85246d"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "54dc3203-e563-4c0c-8f1e-4f252c1d9941"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "a95947b1-8ff3-4210-a204-12a85e2751f3"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "658e8776-ec5c-4845-bf3b-2ce478229e0b"}, {"type": "LinearAxis", "id": "001189e6-7e70-41ce-bb3d-9be8ff382cc6"}, {"type": "Grid", "id": "c2052121-1fdb-4c52-8398-bd3f7b445de6"}, {"type": "Grid", "id": "0f6289fe-ace7-4d98-ba73-faa667993501"}, {"type": "GlyphRenderer", "id": "b065550e-50b4-4470-b946-055a24da9314"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "scatter_example", "tools": [{"type": "PanTool", "id": "a89d0e2b-cb6b-4c7b-8c8b-9248e6d476c3"}, {"type": "ZoomTool", "id": "06b1cf4c-8056-458a-a693-d0e5431eb3f2"}, {"type": "ResizeTool", "id": "87511c11-8b69-41a9-8e08-f74522830333"}], "canvas_width": 600}, "type": "Plot", "id": "scatter_example"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fe5778ab-de29-4d03-8a45-2154cdcba3c6"}, "columns": ["x"]}], "id": "54dc3203-e563-4c0c-8f1e-4f252c1d9941", "doc": null}, "type": "DataRange1d", "id": "54dc3203-e563-4c0c-8f1e-4f252c1d9941"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "86448115-d50b-44de-b978-e4c5590661cc"}, {"type": "DataRange1d", "id": "3095934a-e8ff-4f98-ad20-e583d5560009"}], "dimensions": ["width", "height"], "id": "20cdda19-54dd-49c2-a111-6fe473380003"}, "type": "ZoomTool", "id": "20cdda19-54dd-49c2-a111-6fe473380003"}, {"attributes": {"plot": {"type": "Plot", "id": "4f77e625-a36d-4971-bff5-eb6b30e4d3f3"}, "location": "min", "bounds": "auto", "doc": null, "id": "04041e29-4a58-4210-88e6-5ede7b4364b9", "dimension": 1}, "type": "LinearAxis", "id": "04041e29-4a58-4210-88e6-5ede7b4364b9"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "fe5778ab-de29-4d03-8a45-2154cdcba3c6"}, "type": "ColumnDataSource", "id": "fe5778ab-de29-4d03-8a45-2154cdcba3c6"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "e40ccc27-0169-4459-820a-4c9c536b4459"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "6a517425-deac-4cd0-a400-f41d77a16135"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "8bc31a0e-d198-4514-b2ac-6e754b9522f7"}, {"type": "LinearAxis", "id": "04041e29-4a58-4210-88e6-5ede7b4364b9"}, {"type": "Grid", "id": "924c49af-db5d-4585-9dec-f4e0e31048c1"}, {"type": "Grid", "id": "aaaef308-f824-4f3d-97e0-8b1a6b5dfc40"}, {"type": "GlyphRenderer", "id": "02482f28-eeda-4027-aa84-229baa8ffbe6"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "4f77e625-a36d-4971-bff5-eb6b30e4d3f3", "tools": [{"type": "PanTool", "id": "4b789e11-77c1-40cb-b876-3ac9ec62b270"}, {"type": "ZoomTool", "id": "5f5ba3d1-4ef9-4893-9713-8519f89ce53c"}, {"type": "ResizeTool", "id": "22deceeb-a71d-4c17-895b-e4d30e0f0005"}], "canvas_width": 600}, "type": "Plot", "id": "4f77e625-a36d-4971-bff5-eb6b30e4d3f3"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "doc": null, "dimension": 1, "id": "0f6289fe-ace7-4d98-ba73-faa667993501"}, "type": "Grid", "id": "0f6289fe-ace7-4d98-ba73-faa667993501"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "1791191a-bd21-44e1-95cb-22b8ecc9bca9"}, "doc": null, "id": "fc5a650e-08d8-4fc0-a5c5-fa34536cd58c", "xdata_range": {"type": "DataRange1d", "id": "841a06f6-7715-4f07-a374-e8e34a5a1a54"}, "ydata_range": {"type": "DataRange1d", "id": "694cc9ed-1564-4546-8141-2c932dc6159b"}, "glyphspec": {"line_color": {"value": "green"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "green"}, "tools": "pan,zoom,resize", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "square", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "square", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "fc5a650e-08d8-4fc0-a5c5-fa34536cd58c"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "e40ccc27-0169-4459-820a-4c9c536b4459"}, {"type": "DataRange1d", "id": "6a517425-deac-4cd0-a400-f41d77a16135"}], "dimensions": ["width", "height"], "doc": null, "id": "4b789e11-77c1-40cb-b876-3ac9ec62b270"}, "type": "PanTool", "id": "4b789e11-77c1-40cb-b876-3ac9ec62b270"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "1791191a-bd21-44e1-95cb-22b8ecc9bca9"}, "columns": ["y"]}], "id": "694cc9ed-1564-4546-8141-2c932dc6159b", "doc": null}, "type": "DataRange1d", "id": "694cc9ed-1564-4546-8141-2c932dc6159b"}, {"attributes": {"plot": {"type": "Plot", "id": "4f77e625-a36d-4971-bff5-eb6b30e4d3f3"}, "id": "22deceeb-a71d-4c17-895b-e4d30e0f0005", "doc": null}, "type": "ResizeTool", "id": "22deceeb-a71d-4c17-895b-e4d30e0f0005"}, {"attributes": {"plot": {"type": "Plot", "id": "4f77e625-a36d-4971-bff5-eb6b30e4d3f3"}, "doc": null, "dimension": 1, "id": "aaaef308-f824-4f3d-97e0-8b1a6b5dfc40"}, "type": "Grid", "id": "aaaef308-f824-4f3d-97e0-8b1a6b5dfc40"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "658e8776-ec5c-4845-bf3b-2ce478229e0b", "dimension": 0}, "type": "LinearAxis", "id": "658e8776-ec5c-4845-bf3b-2ce478229e0b"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "fe5778ab-de29-4d03-8a45-2154cdcba3c6"}, "doc": null, "id": "b065550e-50b4-4470-b946-055a24da9314", "xdata_range": {"type": "DataRange1d", "id": "54dc3203-e563-4c0c-8f1e-4f252c1d9941"}, "ydata_range": {"type": "DataRange1d", "id": "a95947b1-8ff3-4210-a204-12a85e2751f3"}, "glyphspec": {"line_color": {"value": "blue"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "blue"}, "tools": "pan,zoom,resize", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "square", "name": "scatter_example"}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "square", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "b065550e-50b4-4470-b946-055a24da9314"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fe5778ab-de29-4d03-8a45-2154cdcba3c6"}, "columns": ["y"]}], "id": "a95947b1-8ff3-4210-a204-12a85e2751f3", "doc": null}, "type": "DataRange1d", "id": "a95947b1-8ff3-4210-a204-12a85e2751f3"}, {"attributes": {"plot": {"type": "Plot", "id": "871e3c14-f3ca-4faa-826e-d1401d85246d"}, "id": "0d12a491-b867-4015-bbd1-8026356475c4", "doc": null}, "type": "ResizeTool", "id": "0d12a491-b867-4015-bbd1-8026356475c4"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "21367500-0280-48f5-810b-255f5ebe8a80"}, "columns": ["y"]}], "id": "6a517425-deac-4cd0-a400-f41d77a16135", "doc": null}, "type": "DataRange1d", "id": "6a517425-deac-4cd0-a400-f41d77a16135"}, {"attributes": {"plot": {"type": "Plot", "id": "c3fc9ed9-2c7d-4956-9e82-a83531730a73"}, "location": "min", "bounds": "auto", "doc": null, "id": "abf70536-b020-44a1-a80d-77ca77de6fe6", "dimension": 0}, "type": "LinearAxis", "id": "abf70536-b020-44a1-a80d-77ca77de6fe6"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "54dc3203-e563-4c0c-8f1e-4f252c1d9941"}, {"type": "DataRange1d", "id": "a95947b1-8ff3-4210-a204-12a85e2751f3"}], "dimensions": ["width", "height"], "doc": null, "id": "a89d0e2b-cb6b-4c7b-8c8b-9248e6d476c3"}, "type": "PanTool", "id": "a89d0e2b-cb6b-4c7b-8c8b-9248e6d476c3"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "841a06f6-7715-4f07-a374-e8e34a5a1a54"}, {"type": "DataRange1d", "id": "694cc9ed-1564-4546-8141-2c932dc6159b"}], "dimensions": ["width", "height"], "id": "5689cd2d-8941-4d60-98bd-654e11ec4b76"}, "type": "ZoomTool", "id": "5689cd2d-8941-4d60-98bd-654e11ec4b76"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "id": "87511c11-8b69-41a9-8e08-f74522830333", "doc": null}, "type": "ResizeTool", "id": "87511c11-8b69-41a9-8e08-f74522830333"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "21367500-0280-48f5-810b-255f5ebe8a80"}, "columns": ["x"]}], "id": "e40ccc27-0169-4459-820a-4c9c536b4459", "doc": null}, "type": "DataRange1d", "id": "e40ccc27-0169-4459-820a-4c9c536b4459"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "16696328-25eb-465b-9474-c4c5e2bdaf9f"}, "columns": ["y"]}], "id": "3095934a-e8ff-4f98-ad20-e583d5560009", "doc": null}, "type": "DataRange1d", "id": "3095934a-e8ff-4f98-ad20-e583d5560009"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "21367500-0280-48f5-810b-255f5ebe8a80"}, "doc": null, "id": "02482f28-eeda-4027-aa84-229baa8ffbe6", "xdata_range": {"type": "DataRange1d", "id": "e40ccc27-0169-4459-820a-4c9c536b4459"}, "ydata_range": {"type": "DataRange1d", "id": "6a517425-deac-4cd0-a400-f41d77a16135"}, "glyphspec": {"line_color": {"value": "red"}, "fill_color": {"value": "red"}, "tools": "pan,zoom,resize", "radius": {"units": "screen", "field": null, "default": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "red"}, "angle_units": "deg", "fill_color": {"value": "red"}, "visible": null, "radius": {"units": "screen", "default": 4, "field": null}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "02482f28-eeda-4027-aa84-229baa8ffbe6"}, {"attributes": {"plot": {"type": "Plot", "id": "871e3c14-f3ca-4faa-826e-d1401d85246d"}, "doc": null, "dimension": 1, "id": "c44423ea-8f53-44f3-87a3-f83c83425179"}, "type": "Grid", "id": "c44423ea-8f53-44f3-87a3-f83c83425179"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "16696328-25eb-465b-9474-c4c5e2bdaf9f"}, "doc": null, "id": "61e2fbd7-a0ef-43c4-bc1d-3846e6ef43bf", "xdata_range": {"type": "DataRange1d", "id": "86448115-d50b-44de-b978-e4c5590661cc"}, "ydata_range": {"type": "DataRange1d", "id": "3095934a-e8ff-4f98-ad20-e583d5560009"}, "glyphspec": {"line_color": {"value": "#FF00FF"}, "fill_color": {"value": "#FF00FF"}, "tools": "pan,zoom,resize", "radius": {"units": "screen", "field": null, "default": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "#FF00FF"}, "angle_units": "deg", "fill_color": {"value": "#FF00FF"}, "visible": null, "radius": {"units": "screen", "default": 4, "field": null}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "61e2fbd7-a0ef-43c4-bc1d-3846e6ef43bf"}];
    var modeltype = "PlotContext";
    var elementid = "9b611b83-0d42-4875-a053-13a5633cfca6";
    var plotID = "scatter_example";
    var dd = {};
    dd[plotID] = all_models;


    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    
    var bokeh_defined = !(typeof(_embed_bokeh_inject_application) == "undefined");
    
    var script_injected = bokeh_defined && _embed_bokeh_inject_application;
    /*
    console.log(
        "plotID", plotID,
        "bokeh_defined", bokeh_defined, 
        "script_injected", script_injected,
        "typeof rrequire", typeof rrequire);
    */
    if(typeof rrequire == "function"){
        // application.js is already loaded
        console.log("application.js is already loaded, going straight to plotting");
        embed_core = rrequire("./embed_core");
        embed_core.search_and_plot(dd);
    }
    else {
        // application.js isn't loaded and it hasn't been scheduled to be injected
        if(!script_injected){ 
            var s = document.createElement('script');
            s.async = true; s.src = bokehUrl; s.id="embed.js"}
        else {
            // in this case, the script block for application.js has been
            // injected, but it hasn't yet loaded.
            var s = document.getElementById('embed.js');
        }

        _embed_bokeh_inject_application = true;
        addEvent(
            s,'load', 
            function() {
                console.log("application.js loaded callback");
                embed_core = rrequire("./embed_core");
                console.log("embed_core loaded")
                embed_core.search_and_plot(dd);
                embed_core.injectCss(host);
                console.log("search_and_plot called");
            });
        document.body.appendChild(s);        
    }

    window._embed_bokeh = true;
}(this));