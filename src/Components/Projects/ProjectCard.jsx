import PropTypes from "prop-types";

const ProjectCard = (props) => {
  return (
    <div className="projectDiv relative h-64 w-80 rounded-xl overflow-hidden group m-10">
      <img
        className="h-full w-full object-cover transition-all scale-100 group-hover:scale-125 group-hover:brightness-50"
        src={props.Url}
        alt=""
      />
      <div className="z-30 trySource absolute top-[70%] flex justify-center w-full gap-12 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-700">
        <a
          href={props.srcURL}
          className="bg-slate-900 text-white px-5 py-1 rounded-2xl hover:brightness-100 transition-all hover:bg-slate-600 active:scale-75"
          style={{ cursor: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO2aPU8bQRCGN1DkV4QmEilQ0gTvHB+pIiQk6kiRaBBV/gW/IRINFUUKJFJ7xggQiK8gSgqU2MxcR4nkgBEEwaE9uMS+2HwY73J33CtNs9Psc+/uzs7qlMqVKzkqFLkXUNaAuKaJVwex/FqlUYC8BSRBFAZGpVEa5bwRRE5VGgV1EFGoNApykIQJckcSJsgdSZggdyRhgtyRFDnSX6q80iiLQFIFkqX3i9yj0ggCxAuNOV6Icua6b27KgHxsbtAFqvQ9GcRdIOYmHMudRTkgWY5B/lCJdQT5sjUknzTkUP5EuX6SN5pk3bilibeduNU2SKyPAeKLfzleaehxUDYTBzJQqgx6JdbxcQNWB3nUakk6BQHk4TCa5VpH3f7hC+fN2gMne2to9D1N/OFJiix0EOS2UDnIs3FkKugqkP8l1SCjWH6piedcQYAtECD5ft8JmLoRP4rDWlLcH7prDGyCFHD/Yztfsp0xsAmiSb5lAgSIOSsgtUyAaOLDTIAAyU4mQDTy14yA+F4mQFQQvNAolfSDqHB5Td4XxFTreI8RVvBYtW82BrZBPs0H3UDy6yFL7JFRVbYE5E+4AtHEe9ZAQleQfzoBQZ5VNuUhjztyZMwqyM1e2bEMsW1OSmVbXpHfmqccOxDyG5DfKVcC9D+bJ8+OQ5R4RLnWdb2Q3Q5BbJifdZxD/NVU0GW+IqBMm7UNyAdNXuT/j+vH6j0gnjEd6GPncQVPsyjsM5IQCAAAAABJRU5ErkJggg=='), auto" }}
        >
          Try
        </a>
        <a
          href={props.gitURL}
          className="bg-slate-900 text-white px-5 py-1 rounded-2xl hover:brightness-100 transition-all hover:bg-slate-600 active:scale-75"
          style={{ cursor: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO2aPU8bQRCGN1DkV4QmEilQ0gTvHB+pIiQk6kiRaBBV/gW/IRINFUUKJFJ7xggQiK8gSgqU2MxcR4nkgBEEwaE9uMS+2HwY73J33CtNs9Psc+/uzs7qlMqVKzkqFLkXUNaAuKaJVwex/FqlUYC8BSRBFAZGpVEa5bwRRE5VGgV1EFGoNApykIQJckcSJsgdSZggdyRhgtyRFDnSX6q80iiLQFIFkqX3i9yj0ggCxAuNOV6Icua6b27KgHxsbtAFqvQ9GcRdIOYmHMudRTkgWY5B/lCJdQT5sjUknzTkUP5EuX6SN5pk3bilibeduNU2SKyPAeKLfzleaehxUDYTBzJQqgx6JdbxcQNWB3nUakk6BQHk4TCa5VpH3f7hC+fN2gMne2to9D1N/OFJiix0EOS2UDnIs3FkKugqkP8l1SCjWH6piedcQYAtECD5ft8JmLoRP4rDWlLcH7prDGyCFHD/Yztfsp0xsAmiSb5lAgSIOSsgtUyAaOLDTIAAyU4mQDTy14yA+F4mQFQQvNAolfSDqHB5Td4XxFTreI8RVvBYtW82BrZBPs0H3UDy6yFL7JFRVbYE5E+4AtHEe9ZAQleQfzoBQZ5VNuUhjztyZMwqyM1e2bEMsW1OSmVbXpHfmqccOxDyG5DfKVcC9D+bJ8+OQ5R4RLnWdb2Q3Q5BbJifdZxD/NVU0GW+IqBMm7UNyAdNXuT/j+vH6j0gnjEd6GPncQVPsyjsM5IQCAAAAABJRU5ErkJggg=='), auto" }}
        >
          Source
        </a>
      </div>

      <div className="projectCap absolute top-[20%] left-[5%] w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-xl text-red-300 font-bold pl-2">{props.Name}</p>
        <p className="text-xs w-[100%] pl-2 pr-6">{props.Desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
