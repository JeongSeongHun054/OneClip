import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Collapse from "@material-ui/core/Collapse";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
}))((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const CustomTreeView = () => {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={["1"]}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
    >
      <StyledTreeItem nodeId="1" label="원소프트다임">
        <StyledTreeItem nodeId="2" label="기획팀">
          <StyledTreeItem nodeId="2.1" label="고범진 팀장" />
          <StyledTreeItem nodeId="2.2" label="김진희 과장" />
          <StyledTreeItem nodeId="2.3" label="김현리 과장" />
          <StyledTreeItem nodeId="2.4" label="이민아 대리" />
          <StyledTreeItem nodeId="2.5" label="조민경 대리" />
          <StyledTreeItem nodeId="2.6" label="김준호 주임" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="3" label="개발팀">
          <StyledTreeItem nodeId="3.1" label="윤예림 대리" />
          <StyledTreeItem nodeId="3.2" label="심드보라 주임" />
          <StyledTreeItem nodeId="3.3" label="김지훈 주임" />
          <StyledTreeItem nodeId="3.4" label="하종호 주임" />
          <StyledTreeItem nodeId="3.5" label="이동석 주임" />
          <StyledTreeItem nodeId="3.6" label="박준하 주임" />
          <StyledTreeItem nodeId="3.7" label="이혁 주임" />
          <StyledTreeItem nodeId="3.8" label="정성훈 주임" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="4" label="시연부서">
          <StyledTreeItem nodeId="4.1" label="김팀장 팀장" />
          <StyledTreeItem nodeId="4.2" label="김과장 과장" />
          <StyledTreeItem nodeId="4.3" label="김대리 대리" />
          <StyledTreeItem nodeId="4.4" label="박대리 대리" />
          <StyledTreeItem nodeId="4.5" label="김주임 주임" />
          <StyledTreeItem nodeId="4.6" label="김사원 사원" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="5" label="OSD_USA">
          <StyledTreeItem nodeId="5.1" label="이창훈 대표이사" />
          <StyledTreeItem nodeId="5.2" label="jiho khang 사원" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="6" label="이대호 대표이사" />
        <StyledTreeItem nodeId="7" label="이순애 부대표" />
        <StyledTreeItem nodeId="8" label="이찬희 이사" />
      </StyledTreeItem>
    </TreeView>
  );
};

export default CustomTreeView;
