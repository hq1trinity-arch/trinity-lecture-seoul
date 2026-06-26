/* @ds-bundle: {"format":3,"namespace":"TRINITYONEDesignSystem_9e0a2b","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ActionSheet","sourcePath":"components/feedback/ActionSheet.jsx"},{"name":"ActivityView","sourcePath":"components/feedback/ActivityView.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"NotificationBanner","sourcePath":"components/feedback/NotificationBanner.jsx"},{"name":"NotificationStack","sourcePath":"components/feedback/NotificationStack.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Segmented","sourcePath":"components/forms/Segmented.jsx"},{"name":"SelectMenu","sourcePath":"components/forms/SelectMenu.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"PageControl","sourcePath":"components/indicators/PageControl.jsx"},{"name":"ProgressRing","sourcePath":"components/indicators/ProgressRing.jsx"},{"name":"ListGroup","sourcePath":"components/navigation/ListGroup.jsx"},{"name":"ListRow","sourcePath":"components/navigation/ListRow.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Toolbar","sourcePath":"components/navigation/Toolbar.jsx"},{"name":"ToolbarSpacer","sourcePath":"components/navigation/Toolbar.jsx"},{"name":"ContextMenuPreview","sourcePath":"components/overlays/ContextMenuPreview.jsx"},{"name":"Menu","sourcePath":"components/overlays/Menu.jsx"},{"name":"Popover","sourcePath":"components/overlays/Popover.jsx"},{"name":"Sheet","sourcePath":"components/overlays/Sheet.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"},{"name":"ColorPicker","sourcePath":"components/pickers/ColorPicker.jsx"},{"name":"DatePicker","sourcePath":"components/pickers/DatePicker.jsx"},{"name":"WheelPicker","sourcePath":"components/pickers/WheelPicker.jsx"},{"name":"Keyboard","sourcePath":"components/system/Keyboard.jsx"},{"name":"LockScreen","sourcePath":"components/system/LockScreen.jsx"},{"name":"MenuBar","sourcePath":"components/system/MenuBar.jsx"},{"name":"StatusBar","sourcePath":"components/system/StatusBar.jsx"},{"name":"Widget","sourcePath":"components/system/Widget.jsx"},{"name":"Window","sourcePath":"components/system/Window.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"269581fc36f3","components/core/Badge.jsx":"76ceb3c195c7","components/core/Button.jsx":"b1eba49bb3c7","components/core/Card.jsx":"df7b52cbb40d","components/core/IconButton.jsx":"cc39ecf5c8ec","components/feedback/ActionSheet.jsx":"be775af42663","components/feedback/ActivityView.jsx":"f5ddac89943f","components/feedback/Alert.jsx":"c2333144a7f6","components/feedback/EmptyState.jsx":"0e1c6b8ffe85","components/feedback/NotificationBanner.jsx":"49ee823b1c00","components/feedback/NotificationStack.jsx":"45204d9670f3","components/feedback/ProgressBar.jsx":"c1920048f83f","components/feedback/Spinner.jsx":"53937ff490f8","components/forms/Checkbox.jsx":"0654da9f2ccb","components/forms/Radio.jsx":"2ef4d086d68e","components/forms/SearchField.jsx":"d2e8cb36d2fe","components/forms/Segmented.jsx":"64b5295ed6d2","components/forms/SelectMenu.jsx":"0b518eba841c","components/forms/Slider.jsx":"ee45535a6335","components/forms/Stepper.jsx":"412673df2577","components/forms/TextField.jsx":"108be58e1e4c","components/forms/Toggle.jsx":"d22318c070f9","components/indicators/PageControl.jsx":"a55e69813905","components/indicators/ProgressRing.jsx":"b601eaaa50ad","components/navigation/ListGroup.jsx":"30c63a205c27","components/navigation/ListRow.jsx":"71bfd36dee04","components/navigation/NavBar.jsx":"90b0bc8aa039","components/navigation/Sidebar.jsx":"8f9a1d1fdca8","components/navigation/TabBar.jsx":"43948178ed8e","components/navigation/Toolbar.jsx":"519f8fa5e605","components/overlays/ContextMenuPreview.jsx":"a8ce34487755","components/overlays/Menu.jsx":"a2dca30a686b","components/overlays/Popover.jsx":"481dcfc99f89","components/overlays/Sheet.jsx":"afdf1f933e60","components/overlays/Tooltip.jsx":"f4f57487aaa5","components/pickers/ColorPicker.jsx":"45a1a231ed56","components/pickers/DatePicker.jsx":"3610bebcd710","components/pickers/WheelPicker.jsx":"2578dc296e94","components/system/Keyboard.jsx":"6609257f40b7","components/system/LockScreen.jsx":"cebad920999e","components/system/MenuBar.jsx":"45f6ce9c6e77","components/system/StatusBar.jsx":"6a3902a95f57","components/system/Widget.jsx":"f5e872853916","components/system/Window.jsx":"c64b4d17cdd8","ui_kits/trinity-app/app.jsx":"ddd3aa3f5c9d","ui_kits/trinity-app/screens.jsx":"faafd9c3b050","ui_kits/trinity-app/shell.jsx":"7e2b2d818dc9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TRINITYONEDesignSystem_9e0a2b = window.TRINITYONEDesignSystem_9e0a2b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — circular monogram or image, with optional online/status dot. */
function Avatar({
  src,
  name = "",
  size = 40,
  status,
  square = false,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const statusColors = {
    online: "var(--accents-green)",
    away: "var(--accents-orange)",
    busy: "var(--accents-red)",
    offline: "var(--grays-gray)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: square ? size * 0.28 : "50%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: src ? "var(--fills-tertiary)" : "var(--trinity-brown-soft)",
      color: "#fff",
      fontFamily: "var(--font-system)",
      fontWeight: 600,
      fontSize: size * 0.4,
      letterSpacing: "-0.3px"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -1,
      bottom: -1,
      width: size * 0.3,
      height: size * 0.3,
      borderRadius: "50%",
      background: statusColors[status] || statusColors.offline,
      boxShadow: "0 0 0 2px var(--surface-card, #fff)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill badge / tag. Notification count, status label, or accent chip. */
function Badge({
  children,
  variant = "neutral",
  color,
  size = "medium",
  style = {},
  ...rest
}) {
  const palette = {
    neutral: {
      bg: "var(--fills-tertiary)",
      fg: "var(--labels-secondary)"
    },
    brand: {
      bg: "var(--tint-fill)",
      fg: "var(--tint)"
    },
    positive: {
      bg: "rgba(52,199,89,0.16)",
      fg: "var(--accents-green)"
    },
    warning: {
      bg: "rgba(255,141,40,0.18)",
      fg: "var(--accents-orange)"
    },
    negative: {
      bg: "var(--miscellaneous-buttons-bg-destructive)",
      fg: "var(--accents-red)"
    },
    count: {
      bg: "var(--accents-red)",
      fg: "#fff"
    }
  };
  const p = palette[variant] || palette.neutral;
  const sz = size === "small" ? {
    fs: 11,
    h: 18,
    px: 6
  } : {
    fs: 13,
    h: 22,
    px: 9
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: sz.h,
      height: sz.h,
      padding: `0 ${sz.px}px`,
      borderRadius: 999,
      background: color ? color : p.bg,
      color: color ? "#fff" : p.fg,
      fontFamily: "var(--font-system)",
      fontSize: sz.fs,
      fontWeight: 600,
      letterSpacing: "-0.1px",
      lineHeight: 1,
      fontVariantNumeric: "tabular-nums",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TRINITY ONE / iOS 26 Button.
 * Mirrors the system button hierarchy: filled, tinted, gray, plain, bordered,
 * plus a translucent "glass" treatment (Liquid Glass) and destructive role.
 */
function Button({
  children,
  variant = "filled",
  size = "medium",
  role = "normal",
  shape = "rounded",
  icon = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    small: {
      h: 30,
      px: 12,
      fs: 15,
      gap: 5,
      r: 8
    },
    medium: {
      h: 38,
      px: 16,
      fs: 16,
      gap: 6,
      r: 10
    },
    large: {
      h: 50,
      px: 22,
      fs: 17,
      gap: 8,
      r: 14
    }
  };
  const s = sizes[size] || sizes.medium;
  const isDestructive = role === "destructive";
  const tint = isDestructive ? "var(--accents-red)" : "var(--tint)";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.h,
    padding: `0 ${s.px}px`,
    width: fullWidth ? "100%" : "auto",
    borderRadius: shape === "capsule" ? 999 : s.r,
    border: "none",
    fontFamily: "var(--font-system)",
    fontSize: s.fs,
    fontWeight: 600,
    letterSpacing: "-0.2px",
    lineHeight: 1,
    cursor: disabled ? "default" : "pointer",
    whiteSpace: "nowrap",
    transition: "filter var(--dur-fast) var(--ease-standard), opacity var(--dur-fast), transform var(--dur-fast)",
    WebkitTapHighlightColor: "transparent",
    opacity: disabled ? 0.4 : 1,
    userSelect: "none"
  };
  const variants = {
    filled: {
      background: tint,
      color: "var(--tint-on)"
    },
    tinted: {
      background: isDestructive ? "var(--miscellaneous-buttons-bg-destructive)" : "var(--tint-fill)",
      color: tint
    },
    gray: {
      background: "var(--fills-tertiary)",
      color: tint
    },
    plain: {
      background: "transparent",
      color: tint,
      padding: `0 ${s.px / 2}px`
    },
    bordered: {
      background: "transparent",
      color: tint,
      boxShadow: `inset 0 0 0 1px ${isDestructive ? "var(--accents-red)" : "var(--separators-opaque)"}`
    },
    glass: {
      background: "var(--glass-fill)",
      color: tint,
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)",
      boxShadow: "inset 0 0 0 0.5px var(--glass-stroke), var(--shadow-sm)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...(variants[variant] || variants.filled),
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.97)"),
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginLeft: -2
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginRight: -2
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. Grouped-list "inset" card (iOS Settings style) or a
 * free-standing elevated card / Liquid-Glass panel.
 */
function Card({
  children,
  variant = "grouped",
  padding = 16,
  radius,
  style = {},
  ...rest
}) {
  const variants = {
    grouped: {
      background: "var(--surface-card)",
      boxShadow: "none",
      border: "none"
    },
    elevated: {
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-card)",
      border: "none"
    },
    outlined: {
      background: "var(--surface-card)",
      boxShadow: "inset 0 0 0 0.5px var(--separators-opaque)",
      border: "none"
    },
    glass: {
      background: "var(--material-regular-fill)",
      backdropFilter: "var(--material-regular-blur)",
      WebkitBackdropFilter: "var(--material-regular-blur)",
      boxShadow: "var(--shadow-glass)",
      border: "0.5px solid var(--glass-stroke)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radius != null ? radius : "var(--radius-xl)",
      padding,
      boxSizing: "border-box",
      ...(variants[variant] || variants.grouped),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular / rounded icon-only button used in nav bars, toolbars and the
 * Liquid-Glass control clusters of iOS 26.
 */
function IconButton({
  children,
  variant = "glass",
  size = 38,
  role = "normal",
  active = false,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const tint = role === "destructive" ? "var(--accents-red)" : "var(--tint)";
  const variants = {
    glass: {
      background: active ? tint : "var(--glass-fill)",
      color: active ? "var(--tint-on)" : "var(--labels-primary)",
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)",
      boxShadow: active ? "none" : "inset 0 0 0 0.5px var(--glass-stroke)"
    },
    gray: {
      background: "var(--fills-tertiary)",
      color: active ? tint : "var(--labels-primary)"
    },
    tinted: {
      background: "var(--tint-fill)",
      color: tint
    },
    plain: {
      background: "transparent",
      color: active ? tint : "var(--labels-secondary)"
    },
    filled: {
      background: tint,
      color: "var(--tint-on)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: 999,
      border: "none",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.4 : 1,
      fontSize: Math.round(size * 0.46),
      transition: "transform var(--dur-fast) var(--ease-standard), background var(--dur-fast)",
      WebkitTapHighlightColor: "transparent",
      ...(variants[variant] || variants.glass),
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.9)"),
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ActionSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS action sheet — bottom-anchored stack of choices on a dimmed overlay,
 * with a separated Cancel button. Title/message optional.
 */
function ActionSheet({
  title,
  message,
  actions = [],
  cancelLabel = "Cancel",
  onCancel,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlays-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: 8,
      zIndex: 50,
      ...style
    },
    onClick: onCancel
  }, rest), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontFamily: "var(--font-system)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--material-thick-fill)",
      backdropFilter: "var(--material-thick-blur)",
      WebkitBackdropFilter: "var(--material-thick-blur)",
      borderRadius: 14,
      overflow: "hidden",
      marginBottom: 8
    }
  }, (title || message) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 12px",
      textAlign: "center",
      borderBottom: "0.5px solid var(--separator)"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--labels-secondary)"
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--labels-secondary)",
      marginTop: 2
    }
  }, message)), actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: a.onClick,
    style: {
      width: "100%",
      border: "none",
      background: "transparent",
      padding: "16px 8px",
      fontSize: 20,
      fontFamily: "var(--font-system)",
      fontWeight: a.preferred ? 600 : 400,
      color: a.destructive ? "var(--accents-red)" : "var(--tint)",
      cursor: "pointer",
      borderTop: i > 0 ? "0.5px solid var(--separator)" : "none",
      WebkitTapHighlightColor: "transparent"
    }
  }, a.label))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCancel,
    style: {
      width: "100%",
      border: "none",
      background: "var(--material-thick-fill)",
      backdropFilter: "var(--material-thick-blur)",
      WebkitBackdropFilter: "var(--material-thick-blur)",
      borderRadius: 14,
      padding: "16px 8px",
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "var(--font-system)",
      color: "var(--tint)",
      cursor: "pointer",
      WebkitTapHighlightColor: "transparent"
    }
  }, cancelLabel)));
}
Object.assign(__ds_scope, { ActionSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ActionSheet.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ActivityView.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS activity view (share sheet) — a bottom card with a header preview, a
 * horizontal row of share targets, and a list of actions. Visual recreation.
 */
function ActivityView({
  title,
  subtitle,
  preview,
  people = [],
  apps = [],
  actions = [],
  onClose,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 60,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlays-activity-view-controller)"
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      margin: 8,
      background: "var(--material-thick-fill)",
      backdropFilter: "var(--material-thick-blur)",
      WebkitBackdropFilter: "var(--material-thick-blur)",
      borderRadius: "var(--radius-sheet-top)",
      overflow: "hidden",
      fontFamily: "var(--font-system)",
      animation: "to-slideup 0.34s var(--ease-standard)"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 16,
      borderBottom: "0.5px solid var(--separator)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      background: "var(--trinity-brown)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      fontSize: 18
    }
  }, preview || "T"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--labels-primary)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--labels-secondary)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      border: "none",
      background: "var(--fills-secondary)",
      color: "var(--labels-tertiary)",
      cursor: "pointer",
      fontSize: 13
    }
  }, "\u2715")), (people.length > 0 || apps.length > 0) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      padding: "16px",
      overflowX: "auto"
    }
  }, people.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: "p" + i,
    style: {
      textAlign: "center",
      flex: "none",
      width: 60
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--trinity-brown-soft)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
      fontWeight: 600
    }
  }, p.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--labels-secondary)",
      marginTop: 5,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, p.name))), apps.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: "a" + i,
    style: {
      textAlign: "center",
      flex: "none",
      width: 60
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 14,
      background: a.color || "var(--fills-tertiary)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 22
    }
  }, a.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--labels-secondary)",
      marginTop: 5
    }
  }, a.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px 16px",
      background: "var(--backgrounds-grouped-secondary-elevated)",
      borderRadius: 12,
      overflow: "hidden"
    }
  }, actions.map((act, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: act.onClick,
    style: {
      width: "100%",
      border: "none",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "13px 16px",
      fontSize: 17,
      color: act.destructive ? "var(--accents-red)" : "var(--labels-primary)",
      cursor: "pointer",
      borderTop: i > 0 ? "0.5px solid var(--separator)" : "none",
      fontFamily: "var(--font-system)",
      WebkitTapHighlightColor: "transparent"
    }
  }, /*#__PURE__*/React.createElement("span", null, act.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: act.destructive ? "var(--accents-red)" : "var(--labels-tertiary)",
      display: "inline-flex"
    }
  }, act.icon)))), /*#__PURE__*/React.createElement("style", null, `@keyframes to-slideup{from{transform:translateY(100%)}to{transform:none}}`)));
}
Object.assign(__ds_scope, { ActivityView });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ActivityView.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS alert dialog — centered card on a dimmed overlay, title + message,
 * and a vertical or horizontal stack of buttons (one may be destructive,
 * one preferred/bold).
 */
function Alert({
  title,
  message,
  actions = [],
  icon,
  onDismiss,
  style = {},
  ...rest
}) {
  const horizontal = actions.length === 2;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--miscellaneous-alert-overlay)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      zIndex: 50,
      ...style
    },
    onClick: onDismiss
  }, rest), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 270,
      background: "var(--material-thick-fill)",
      backdropFilter: "var(--material-thick-blur)",
      WebkitBackdropFilter: "var(--material-thick-blur)",
      borderRadius: 14,
      overflow: "hidden",
      fontFamily: "var(--font-system)",
      boxShadow: "var(--shadow-popover)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px 16px",
      textAlign: "center"
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 8,
      color: "var(--tint)"
    }
  }, icon), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: "var(--labels-primary)"
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--labels-primary)",
      marginTop: 4,
      lineHeight: 1.35
    }
  }, message)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      borderTop: "0.5px solid var(--separator)"
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: a.onClick,
    style: {
      flex: 1,
      border: "none",
      background: "transparent",
      padding: "11px 8px",
      fontSize: 17,
      fontFamily: "var(--font-system)",
      fontWeight: a.preferred ? 600 : 400,
      color: a.destructive ? "var(--accents-red)" : "var(--tint)",
      cursor: "pointer",
      borderTop: !horizontal && i > 0 ? "0.5px solid var(--separator)" : "none",
      borderLeft: horizontal && i > 0 ? "0.5px solid var(--separator)" : "none",
      WebkitTapHighlightColor: "transparent"
    }
  }, a.label)))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** iOS empty state — centered glyph, title, message and optional action. */
function EmptyState({
  icon,
  title,
  message,
  action,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 40,
      gap: 6,
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 46,
      color: "var(--labels-quaternary)",
      marginBottom: 8,
      display: "inline-flex"
    }
  }, icon), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: "var(--labels-primary)"
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--labels-secondary)",
      maxWidth: 280,
      lineHeight: 1.35
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/NotificationBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS notification banner — translucent rounded card with an app-icon tile,
 * title, subtitle and timestamp. Used for push / in-app banners.
 */
function NotificationBanner({
  appIcon,
  appName = "TRINITY ONE",
  title,
  message,
  time = "now",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      width: "100%",
      maxWidth: 380,
      padding: 13,
      borderRadius: 22,
      background: "var(--material-thick-fill)",
      backdropFilter: "var(--material-regular-blur)",
      WebkitBackdropFilter: "var(--material-regular-blur)",
      boxShadow: "var(--shadow-glass)",
      border: "0.5px solid var(--glass-stroke)",
      fontFamily: "var(--font-system)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: "var(--trinity-brown)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      fontSize: 18,
      overflow: "hidden"
    }
  }, appIcon || appName[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--labels-primary)",
      textTransform: "uppercase",
      letterSpacing: "0.3px"
    }
  }, appName), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--labels-tertiary)",
      flex: "none"
    }
  }, time)), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--labels-primary)",
      marginTop: 1
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--labels-primary)",
      lineHeight: 1.3,
      marginTop: 1
    }
  }, message)));
}
Object.assign(__ds_scope, { NotificationBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/NotificationBanner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/NotificationStack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS notification stack — multiple banners collapsed into a layered pile with
 * a count, the iOS Lock-Screen grouping. Pass banner nodes as children.
 */
function NotificationStack({
  children,
  collapsed = true,
  count,
  style = {},
  ...rest
}) {
  const items = React.Children.toArray(children).filter(Boolean);
  const n = count != null ? count : items.length;
  if (collapsed && items.length > 1) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        position: "relative",
        fontFamily: "var(--font-system)",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 14,
        right: 14,
        top: 14,
        height: 40,
        borderRadius: 22,
        background: "var(--material-thin-fill)",
        backdropFilter: "var(--material-regular-blur)",
        WebkitBackdropFilter: "var(--material-regular-blur)",
        boxShadow: "var(--shadow-sm)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 7,
        right: 7,
        top: 7,
        height: 44,
        borderRadius: 22,
        background: "var(--material-thick-fill)",
        backdropFilter: "var(--material-regular-blur)",
        WebkitBackdropFilter: "var(--material-regular-blur)",
        boxShadow: "var(--shadow-sm)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, items[0], /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -7,
        right: -5,
        minWidth: 22,
        height: 22,
        padding: "0 6px",
        borderRadius: 11,
        background: "var(--accents-red)",
        color: "#fff",
        fontSize: 12,
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, n)));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), items);
}
Object.assign(__ds_scope, { NotificationStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/NotificationStack.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Linear progress / determinate bar. Indeterminate when value is null. */
function ProgressBar({
  value = null,
  tint,
  height = 4,
  style = {},
  ...rest
}) {
  const pct = value == null ? 30 : Math.min(100, Math.max(0, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: "100%",
      height,
      borderRadius: height,
      background: "var(--fills-secondary)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: `${pct}%`,
      borderRadius: height,
      background: tint || "var(--tint)",
      transition: "width var(--dur-medium) var(--ease-standard)",
      animation: value == null ? "to-indeterminate 1.2s ease-in-out infinite" : "none"
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes to-indeterminate { 0%{left:-30%} 100%{left:100%} }`));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** iOS activity spinner (12 fading spokes). */
function Spinner({
  size = 20,
  color = "var(--labels-tertiary)",
  style = {},
  ...rest
}) {
  const spokes = Array.from({
    length: 12
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      width: size,
      height: size,
      position: "relative",
      ...style
    }
  }, rest), spokes.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: Math.max(1.4, size * 0.09),
      height: size * 0.27,
      borderRadius: size,
      background: color,
      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${size * 0.34}px)`,
      opacity: (i + 1) / 12,
      animation: `to-spin 1s linear infinite`,
      animationDelay: `${i / 12 - 1}s`
    }
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes to-spin { 0%{opacity:1} 100%{opacity:0.15} }`));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** iOS-style checkbox — a filled tinted circle with a checkmark when on. */
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 24,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = useState(defaultChecked);
  const on = checked != null ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked == null) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      border: on ? "none" : "1.8px solid var(--separators-opaque)",
      background: on ? "var(--tint)" : "transparent",
      cursor: disabled ? "default" : "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast), border var(--dur-fast)",
      WebkitTapHighlightColor: "transparent",
      ...style
    }
  }, rest), on && /*#__PURE__*/React.createElement("svg", {
    width: size * 0.6,
    height: size * 0.6,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 7.5l3 3 6-6.5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio group rendered as iOS list rows with a trailing checkmark on the
 * selected option (the native iOS single-select pattern).
 */
function Radio({
  options = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), options.map((opt, i) => {
    const key = typeof opt === "string" ? opt : opt.value;
    const label = typeof opt === "string" ? opt : opt.label;
    const on = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      onClick: () => onChange && onChange(key),
      style: {
        width: "100%",
        border: "none",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        minHeight: 44,
        fontSize: 17,
        color: "var(--labels-primary)",
        cursor: "pointer",
        textAlign: "left",
        borderTop: i > 0 ? "0.5px solid var(--separator)" : "none",
        WebkitTapHighlightColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", null, label), on && /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      style: {
        color: "var(--tint)"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 9.5l4 4 8-9",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * iOS search field — rounded gray field with a leading magnifier and an
 * animated trailing "Cancel" button while focused/non-empty.
 */
function SearchField({
  value,
  defaultValue = "",
  onChange,
  onCancel,
  placeholder = "Search",
  style = {},
  ...rest
}) {
  const [internal, setInternal] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const v = value != null ? value : internal;
  const set = nv => {
    if (value == null) setInternal(nv);
    onChange && onChange(nv);
  };
  const showCancel = focused || v;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: 6,
      height: 36,
      padding: "0 8px",
      borderRadius: 10,
      background: "var(--fills-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      color: "var(--labels-tertiary)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "5",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 11l3.5 3.5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("input", {
    value: v,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: e => set(e.target.value),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-system)",
      fontSize: 17,
      color: "var(--labels-primary)",
      minWidth: 0
    }
  }), v && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => set(""),
    "aria-label": "Clear",
    style: {
      border: "none",
      background: "var(--fills-secondary)",
      color: "var(--labels-tertiary)",
      width: 18,
      height: 18,
      borderRadius: "50%",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      flex: "none"
    }
  }, "\u2715")), showCancel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      set("");
      onCancel && onCancel();
    },
    style: {
      border: "none",
      background: "transparent",
      color: "var(--tint)",
      fontFamily: "var(--font-system)",
      fontSize: 17,
      cursor: "pointer",
      flex: "none",
      padding: 0
    }
  }, "Cancel"));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Segmented.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** iOS segmented control. */
function Segmented({
  segments = [],
  value,
  defaultValue,
  onChange,
  size = "medium",
  style = {},
  ...rest
}) {
  const keys = segments.map(s => typeof s === "string" ? s : s.value);
  const [internal, setInternal] = useState(defaultValue != null ? defaultValue : keys[0]);
  const active = value != null ? value : internal;
  const h = size === "small" ? 28 : 32;
  const select = k => {
    if (value == null) setInternal(k);
    onChange && onChange(k);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      padding: 2,
      height: h,
      boxSizing: "border-box",
      background: "var(--fills-tertiary)",
      borderRadius: 9,
      position: "relative",
      ...style
    }
  }, rest), segments.map(s => {
    const key = typeof s === "string" ? s : s.value;
    const label = typeof s === "string" ? s : s.label;
    const on = key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      onClick: () => select(key),
      style: {
        border: "none",
        borderRadius: 7,
        padding: "0 14px",
        minWidth: 44,
        fontFamily: "var(--font-system)",
        fontSize: size === "small" ? 13 : 14,
        fontWeight: on ? 600 : 500,
        color: "var(--labels-primary)",
        background: on ? "var(--miscellaneous-segmented-control-selected-fill)" : "transparent",
        boxShadow: on ? "0 1px 3px rgba(0,0,0,0.12), 0 0 0 0.5px rgba(0,0,0,0.04)" : "none",
        cursor: "pointer",
        transition: "background var(--dur-fast), font-weight var(--dur-fast)",
        WebkitTapHighlightColor: "transparent"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectMenu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS pop-up button — a compact control showing the current value with an
 * up/down chevron; tapping reveals a Menu. Render the menu yourself on `open`.
 */
function SelectMenu({
  value,
  placeholder = "Select",
  onClick,
  open = false,
  variant = "gray",
  style = {},
  ...rest
}) {
  const variants = {
    gray: {
      background: "var(--fills-tertiary)",
      color: "var(--labels-primary)"
    },
    tinted: {
      background: "var(--tint-fill)",
      color: "var(--tint)"
    },
    plain: {
      background: "transparent",
      color: "var(--tint)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-haspopup": "menu",
    "aria-expanded": open,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 34,
      padding: "0 10px 0 12px",
      border: "none",
      borderRadius: 9,
      fontFamily: "var(--font-system)",
      fontSize: 16,
      fontWeight: 500,
      cursor: "pointer",
      WebkitTapHighlightColor: "transparent",
      ...(variants[variant] || variants.gray),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: value ? "inherit" : "var(--labels-tertiary)"
    }
  }, value || placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "16",
    viewBox: "0 0 12 16",
    fill: "none",
    style: {
      flex: "none",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6l3-3 3 3M3 10l3 3 3-3",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { SelectMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectMenu.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useRef
} = React;
/** iOS slider. Filled track to the thumb, optional min/max glyphs. */
function Slider({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  onChange,
  tint,
  leading = null,
  trailing = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = useState(defaultValue);
  const v = value != null ? value : internal;
  const pct = (v - min) / (max - min) * 100;
  const trackRef = useRef(null);
  const setFromClient = clientX => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const nv = Math.round(min + ratio * (max - min));
    if (value == null) setInternal(nv);
    onChange && onChange(nv);
  };
  const onDown = e => {
    if (disabled) return;
    setFromClient(e.clientX);
    const move = ev => setFromClient(ev.clientX);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--labels-tertiary)",
      display: "inline-flex"
    }
  }, leading), /*#__PURE__*/React.createElement("div", _extends({
    ref: trackRef,
    onPointerDown: onDown,
    style: {
      position: "relative",
      flex: 1,
      height: 28,
      display: "flex",
      alignItems: "center",
      cursor: disabled ? "default" : "pointer",
      touchAction: "none"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 4,
      borderRadius: 2,
      background: "var(--fills-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      width: `${pct}%`,
      height: 4,
      borderRadius: 2,
      background: tint || "var(--tint)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${pct}% - 14px)`,
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 1px 4px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.12)"
    }
  })), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--labels-tertiary)",
      display: "inline-flex"
    }
  }, trailing));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** iOS stepper — segmented −/+ control over a gray fill. */
function Stepper({
  value,
  defaultValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = useState(defaultValue);
  const v = value != null ? value : internal;
  const set = nv => {
    const c = Math.min(max, Math.max(min, nv));
    if (value == null) setInternal(c);
    onChange && onChange(c);
  };
  const Btn = ({
    children,
    onClick,
    dis,
    side
  }) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: dis,
    style: {
      width: 46,
      height: 32,
      border: "none",
      background: "transparent",
      color: "var(--labels-primary)",
      fontSize: 20,
      cursor: dis ? "default" : "pointer",
      opacity: dis ? 0.3 : 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRight: side === "left" ? "1px solid var(--separators-non-opaque)" : "none",
      WebkitTapHighlightColor: "transparent"
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      height: 32,
      background: "var(--fills-tertiary)",
      borderRadius: 8,
      overflow: "hidden",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Btn, {
    side: "left",
    dis: disabled || v <= min,
    onClick: () => set(v - step)
  }, "\u2212"), /*#__PURE__*/React.createElement(Btn, {
    dis: disabled || v >= max,
    onClick: () => set(v + step)
  }, "+"));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** iOS text field. Plain (underlined-less rounded fill) or bordered. */
function TextField({
  value,
  defaultValue = "",
  onChange,
  placeholder,
  label,
  type = "text",
  variant = "filled",
  icon = null,
  clearable = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = useState(defaultValue);
  const v = value != null ? value : internal;
  const set = nv => {
    if (value == null) setInternal(nv);
    onChange && onChange(nv);
  };
  const fieldStyles = {
    filled: {
      background: "var(--fills-tertiary)",
      boxShadow: "none"
    },
    bordered: {
      background: "var(--surface-input)",
      boxShadow: "inset 0 0 0 1px var(--border-input)"
    }
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-system)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--labels-secondary)",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 44,
      padding: "0 12px",
      borderRadius: 10,
      opacity: disabled ? 0.5 : 1,
      ...fieldStyles[variant]
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--labels-tertiary)",
      display: "inline-flex"
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: v,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => set(e.target.value),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-system)",
      fontSize: 17,
      color: "var(--labels-primary)",
      minWidth: 0
    }
  }, rest)), clearable && v && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => set(""),
    "aria-label": "Clear",
    style: {
      border: "none",
      background: "var(--fills-secondary)",
      color: "var(--labels-tertiary)",
      width: 18,
      height: 18,
      borderRadius: "50%",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      lineHeight: 1
    }
  }, "\u2715")));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** iOS switch. Controlled (`checked`) or uncontrolled (`defaultChecked`). */
function Toggle({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  tint,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = useState(defaultChecked);
  const on = checked != null ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked == null) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      width: 51,
      height: 31,
      borderRadius: 999,
      border: "none",
      padding: 2,
      cursor: disabled ? "default" : "pointer",
      background: on ? tint || "var(--accents-green)" : "var(--fills-secondary)",
      transition: "background var(--dur-medium) var(--ease-standard)",
      display: "inline-flex",
      alignItems: "center",
      opacity: disabled ? 0.5 : 1,
      WebkitTapHighlightColor: "transparent",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 27,
      height: 27,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 3px 8px rgba(0,0,0,0.15), 0 1px 1px rgba(0,0,0,0.16)",
      transform: on ? "translateX(20px)" : "translateX(0)",
      transition: "transform var(--dur-medium) var(--ease-standard)"
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/indicators/PageControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** iOS page control — a row of dots indicating position in a paged view. */
function PageControl({
  count = 3,
  active = 0,
  onChange,
  tint,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      gap: 7,
      alignItems: "center",
      ...style
    }
  }, rest), Array.from({
    length: count
  }).map((_, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      "aria-label": `Page ${i + 1}`,
      onClick: () => onChange && onChange(i),
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        border: "none",
        padding: 0,
        cursor: "pointer",
        background: on ? tint || "var(--tint)" : "var(--labels-quaternary)",
        transition: "background var(--dur-fast)",
        WebkitTapHighlightColor: "transparent"
      }
    });
  }));
}
Object.assign(__ds_scope, { PageControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/indicators/PageControl.jsx", error: String((e && e.message) || e) }); }

// components/indicators/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular (ring) progress — determinate gauge with optional center label. */
function ProgressRing({
  value = 0,
  size = 64,
  thickness = 6,
  tint,
  track,
  label,
  style = {},
  ...rest
}) {
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(100, Math.max(0, value));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track || "var(--fills-secondary)",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: tint || "var(--tint)",
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeDasharray: circ,
    strokeDashoffset: circ * (1 - pct / 100),
    style: {
      transition: "stroke-dashoffset var(--dur-medium) var(--ease-standard)"
    }
  })), label != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-system)",
      fontSize: size * 0.26,
      fontWeight: 600,
      color: "var(--labels-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/indicators/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grouped inset list container (iOS Settings style). Wrap ListRow children;
 * separators are inserted automatically between rows.
 */
function ListGroup({
  header,
  footer,
  inset = true,
  children,
  style = {},
  ...rest
}) {
  const rows = React.Children.toArray(children).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: inset ? "0 16px 7px" : "0 0 7px",
      fontSize: 13,
      color: "var(--labels-secondary)",
      textTransform: "uppercase",
      letterSpacing: "0.4px",
      fontWeight: 400
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: inset ? "var(--radius-lg)" : 0,
      overflow: "hidden"
    }
  }, rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, row, i < rows.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: "0.5px",
      background: "var(--separator)",
      marginLeft: 54
    }
  })))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: inset ? "7px 16px 0" : "7px 0 0",
      fontSize: 13,
      color: "var(--labels-secondary)"
    }
  }, footer));
}
Object.assign(__ds_scope, { ListGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListGroup.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A single iOS list cell: leading icon tile, title + optional subtitle,
 * trailing value / control, and an optional disclosure chevron.
 */
function ListRow({
  title,
  subtitle,
  value,
  leading,
  iconBg,
  trailing,
  chevron = false,
  onClick,
  destructive = false,
  style = {},
  ...rest
}) {
  const interactive = !!onClick || chevron;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    role: interactive ? "button" : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      minHeight: 44,
      padding: "9px 16px",
      background: "transparent",
      cursor: interactive ? "pointer" : "default",
      fontFamily: "var(--font-system)",
      WebkitTapHighlightColor: "transparent",
      transition: "background var(--dur-fast)",
      ...style
    },
    onMouseDown: e => interactive && (e.currentTarget.style.background = "var(--fills-quaternary)"),
    onMouseUp: e => e.currentTarget.style.background = "transparent",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, rest), leading && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: iconBg || "var(--tint)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      fontSize: 16
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      color: destructive ? "var(--accents-red)" : "var(--labels-primary)",
      letterSpacing: "-0.2px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--labels-secondary)",
      marginTop: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, subtitle)), value != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      color: "var(--labels-secondary)",
      flex: "none"
    }
  }, value), trailing, chevron && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      color: "var(--labels-tertiary)",
      display: "inline-flex",
      marginRight: -4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "15",
    viewBox: "0 0 9 15",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 1.5L7 7.5L1.5 13.5",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS navigation bar. Large-title or inline title, leading/trailing accessory
 * slots, on a translucent material that blurs content scrolling beneath.
 */
function NavBar({
  title,
  largeTitle = false,
  leading,
  trailing,
  subtitle,
  material = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: material ? "var(--material-thin-fill)" : "transparent",
      backdropFilter: material ? "var(--material-chrome-blur)" : "none",
      WebkitBackdropFilter: material ? "var(--material-chrome-blur)" : "none",
      borderBottom: material ? "0.5px solid var(--separator)" : "none",
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 8px",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      minWidth: 60,
      flex: 1
    }
  }, leading), !largeTitle && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      flex: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: "var(--labels-primary)",
      letterSpacing: "-0.3px",
      whiteSpace: "nowrap"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--labels-secondary)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      minWidth: 60,
      flex: 1,
      justifyContent: "flex-end"
    }
  }, trailing)), largeTitle && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 700,
      letterSpacing: "0.37px",
      color: "var(--labels-primary)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--labels-secondary)",
      marginTop: 2
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iPad / Mac sidebar list — a vibrant translucent column of selectable rows
 * with leading glyphs; the selected row gets a tinted fill.
 */
function Sidebar({
  items = [],
  active,
  onChange,
  header,
  width = 260,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      padding: 8,
      boxSizing: "border-box",
      background: "var(--material-thin-fill)",
      backdropFilter: "var(--material-regular-blur)",
      WebkitBackdropFilter: "var(--material-regular-blur)",
      fontFamily: "var(--font-system)",
      height: "100%",
      ...style
    }
  }, rest), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px 8px",
      fontSize: 22,
      fontWeight: 700,
      color: "var(--labels-primary)"
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, items.map(it => {
    if (it.section) return /*#__PURE__*/React.createElement("div", {
      key: it.section,
      style: {
        padding: "12px 12px 4px",
        fontSize: 12,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.4px",
        color: "var(--labels-tertiary)"
      }
    }, it.section);
    const on = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      type: "button",
      onClick: () => onChange && onChange(it.key),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "8px 12px",
        minHeight: 36,
        border: "none",
        borderRadius: 9,
        background: on ? "var(--tint)" : "transparent",
        color: on ? "var(--tint-on)" : "var(--labels-primary)",
        fontSize: 15,
        fontWeight: on ? 600 : 500,
        cursor: "pointer",
        textAlign: "left",
        WebkitTapHighlightColor: "transparent",
        transition: "background var(--dur-fast)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        color: on ? "var(--tint-on)" : "var(--tint)"
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: on ? "var(--tint-on)" : "var(--labels-tertiary)",
        fontWeight: 600
      }
    }, it.badge));
  })));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS 26 floating tab bar — a translucent Liquid-Glass pill with icon+label
 * items. Pass items and the active key.
 */
function TabBar({
  items = [],
  active,
  onChange,
  floating = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      padding: floating ? 6 : "6px 8px",
      background: "var(--material-thick-fill)",
      backdropFilter: "var(--material-regular-blur)",
      WebkitBackdropFilter: "var(--material-regular-blur)",
      borderRadius: floating ? 999 : 0,
      boxShadow: floating ? "var(--shadow-floating-tab), inset 0 0 0 0.5px var(--glass-stroke)" : "none",
      borderTop: floating ? "none" : "0.5px solid var(--separator)",
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), items.map(it => {
    const on = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      type: "button",
      onClick: () => onChange && onChange(it.key),
      style: {
        border: "none",
        background: on && floating ? "var(--tint-fill)" : "transparent",
        borderRadius: floating ? 999 : 10,
        padding: floating ? "8px 16px" : "4px 14px",
        display: "flex",
        flexDirection: floating ? "row" : "column",
        alignItems: "center",
        gap: floating ? 7 : 3,
        color: on ? "var(--tint)" : "var(--miscellaneous-tab-unselected)",
        cursor: "pointer",
        fontSize: floating ? 15 : 10,
        fontWeight: on ? 600 : 500,
        WebkitTapHighlightColor: "transparent",
        transition: "color var(--dur-fast), background var(--dur-fast)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        fontSize: floating ? 18 : 22
      }
    }, it.icon), (floating ? on : true) && /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap"
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Toolbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS bottom toolbar — a translucent bar holding glass icon/text buttons,
 * commonly with a flexible spacer between groups.
 */
function Toolbar({
  children,
  floating = false,
  material = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      height: 50,
      padding: "0 10px",
      borderRadius: floating ? 999 : 0,
      background: material ? floating ? "var(--glass-fill)" : "var(--material-thin-fill)" : "transparent",
      backdropFilter: material ? "var(--material-chrome-blur)" : "none",
      WebkitBackdropFilter: material ? "var(--material-chrome-blur)" : "none",
      borderTop: !floating && material ? "0.5px solid var(--separator)" : "none",
      boxShadow: floating ? "var(--shadow-floating-tab), inset 0 0 0 0.5px var(--glass-stroke)" : "none",
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), children);
}

/** Flexible spacer for use between Toolbar groups. */
function ToolbarSpacer() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  });
}
Object.assign(__ds_scope, { Toolbar, ToolbarSpacer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Toolbar.jsx", error: String((e && e.message) || e) }); }

// components/overlays/ContextMenuPreview.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS long-press context menu with a preview — a rounded preview card floating
 * above a Menu, on a dimmed/blurred backdrop. Compose with the Menu component.
 */
function ContextMenuPreview({
  preview,
  menu,
  align = "left",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "right" ? "flex-end" : "flex-start",
      gap: 12,
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "var(--shadow-glass)",
      background: "var(--surface-card)",
      maxWidth: 280
    }
  }, preview), menu);
}
Object.assign(__ds_scope, { ContextMenuPreview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/ContextMenuPreview.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS context / pop-up menu — a translucent rounded list of items, each with
 * a label and trailing glyph, optional section separators and destructive rows.
 */
function Menu({
  items = [],
  width = 250,
  onSelect,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "menu",
    style: {
      width,
      background: "var(--material-thick-fill)",
      backdropFilter: "var(--material-thick-blur)",
      WebkitBackdropFilter: "var(--material-thick-blur)",
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "var(--shadow-popover)",
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), items.map((it, i) => {
    if (it.separator) return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        height: 7,
        background: "var(--separators-non-opaque)"
      }
    });
    const color = it.destructive ? "var(--accents-red)" : "var(--labels-primary)";
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      role: "menuitem",
      onClick: () => {
        it.onClick && it.onClick();
        onSelect && onSelect(it);
      },
      style: {
        width: "100%",
        border: "none",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 16px",
        minHeight: 44,
        fontFamily: "var(--font-system)",
        fontSize: 17,
        color,
        cursor: "pointer",
        textAlign: "left",
        borderTop: i > 0 && !items[i - 1].separator ? "0.5px solid var(--separators-non-opaque)" : "none",
        WebkitTapHighlightColor: "transparent"
      },
      onMouseDown: e => e.currentTarget.style.background = "var(--fills-quaternary)",
      onMouseUp: e => e.currentTarget.style.background = "transparent",
      onMouseLeave: e => e.currentTarget.style.background = "transparent"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontWeight: it.selected ? 600 : 400
      }
    }, it.label), it.selected && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--tint)",
        display: "inline-flex"
      }
    }, "\u2713"), it.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        color,
        display: "inline-flex"
      }
    }, it.icon));
  }));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Popover.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS popover — a translucent rounded container with a directional arrow,
 * floating above its anchor. Holds arbitrary content (menus, controls, info).
 */
function Popover({
  children,
  arrow = "top",
  width = 260,
  style = {},
  ...rest
}) {
  const arrowSize = 12;
  const pos = {
    top: {
      top: -arrowSize + 1,
      left: "50%",
      transform: "translateX(-50%) rotate(45deg)"
    },
    bottom: {
      bottom: -arrowSize + 1,
      left: "50%",
      transform: "translateX(-50%) rotate(45deg)"
    },
    left: {
      left: -arrowSize + 1,
      top: "50%",
      transform: "translateY(-50%) rotate(45deg)"
    },
    right: {
      right: -arrowSize + 1,
      top: "50%",
      transform: "translateY(-50%) rotate(45deg)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width,
      background: "var(--material-thick-fill)",
      backdropFilter: "var(--material-thick-blur)",
      WebkitBackdropFilter: "var(--material-thick-blur)",
      borderRadius: 16,
      boxShadow: "var(--shadow-popover)",
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: arrowSize,
      height: arrowSize,
      background: "var(--material-thick-fill)",
      backdropFilter: "var(--material-thick-blur)",
      WebkitBackdropFilter: "var(--material-thick-blur)",
      ...pos[arrow]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 14
    }
  }, children));
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Popover.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Sheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS sheet — a bottom-anchored card that slides up over a dimmed backdrop,
 * with a grabber handle and large top corners. Supports a detent height.
 */
function Sheet({
  open = true,
  onClose,
  children,
  height = "auto",
  grabber = true,
  title,
  trailing,
  style = {},
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 60,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlays-default)",
      animation: "to-fade 0.25s ease"
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: "var(--backgrounds-grouped-primary-elevated)",
      borderTopLeftRadius: "var(--radius-sheet-top)",
      borderTopRightRadius: "var(--radius-sheet-top)",
      maxHeight: "92%",
      height,
      boxShadow: "var(--shadow-sheet)",
      fontFamily: "var(--font-system)",
      display: "flex",
      flexDirection: "column",
      animation: "to-slideup 0.34s var(--ease-standard)",
      ...style
    }
  }, rest), grabber && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "8px 0 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 5,
      borderRadius: 3,
      background: "var(--labels-quaternary)"
    }
  })), (title || trailing) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 16px 8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, title), trailing), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      padding: "4px 0 16px"
    }
  }, children)), /*#__PURE__*/React.createElement("style", null, `@keyframes to-slideup{from{transform:translateY(100%)}to{transform:none}}@keyframes to-fade{from{opacity:0}to{opacity:1}}`));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small tooltip / coachmark bubble with a directional arrow. Dark by default. */
function Tooltip({
  children,
  arrow = "bottom",
  dark = true,
  style = {},
  ...rest
}) {
  const bg = dark ? "rgb(38,38,40)" : "var(--material-thick-fill)";
  const fg = dark ? "#fff" : "var(--labels-primary)";
  const a = 8;
  const pos = {
    top: {
      top: -a + 1,
      left: "50%",
      transform: "translateX(-50%) rotate(45deg)"
    },
    bottom: {
      bottom: -a + 1,
      left: "50%",
      transform: "translateX(-50%) rotate(45deg)"
    },
    left: {
      left: -a + 1,
      top: "50%",
      transform: "translateY(-50%) rotate(45deg)"
    },
    right: {
      right: -a + 1,
      top: "50%",
      transform: "translateY(-50%) rotate(45deg)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-block",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block",
      background: bg,
      color: fg,
      fontFamily: "var(--font-system)",
      fontSize: 14,
      fontWeight: 500,
      padding: "7px 11px",
      borderRadius: 9,
      boxShadow: "var(--shadow-popover)",
      backdropFilter: dark ? "none" : "var(--material-thick-blur)",
      WebkitBackdropFilter: dark ? "none" : "var(--material-thick-blur)"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: a,
      height: a,
      background: bg,
      ...pos[arrow]
    }
  }));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/pickers/ColorPicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS color picker grid — a palette of swatches; the selected one gets a ring.
 * Defaults to the system accent palette plus the TRINITY browns.
 */
const DEFAULT_COLORS = ["#FF3B30", "#FF8D28", "#FFCC00", "#34C759", "#00C7BE", "#30B0C7", "#0088FF", "#5856D6", "#AF52DE", "#FF2D55", "#A2845E", "#7A5C3A"];
function ColorPicker({
  colors = DEFAULT_COLORS,
  value,
  onChange,
  size = 34,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(6, ${size}px)`,
      gap: 12,
      ...style
    }
  }, rest), colors.map(c => {
    const on = c.toLowerCase() === (value || "").toLowerCase();
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      type: "button",
      "aria-label": c,
      onClick: () => onChange && onChange(c),
      style: {
        width: size,
        height: size,
        borderRadius: "50%",
        background: c,
        border: "none",
        cursor: "pointer",
        boxShadow: on ? `0 0 0 2.5px var(--backgrounds-grouped-primary-elevated, #fff), 0 0 0 5px ${c}` : "inset 0 0 0 0.5px rgba(0,0,0,0.12)",
        transition: "box-shadow var(--dur-fast)",
        WebkitTapHighlightColor: "transparent"
      }
    });
  }));
}
Object.assign(__ds_scope, { ColorPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pickers/ColorPicker.jsx", error: String((e && e.message) || e) }); }

// components/pickers/DatePicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * iOS graphical date picker — a month calendar grid. The selected day gets a
 * filled tint circle; today is tinted text. Header shows month + chevrons.
 */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DOW = ["S", "M", "T", "W", "T", "F", "S"];
function DatePicker({
  year = 2026,
  month = 5,
  selected = 12,
  today = 24,
  onSelect,
  style = {},
  ...rest
}) {
  const [m, setM] = useState(month);
  const [y, setY] = useState(year);
  const first = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < first; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  const step = dir => {
    let nm = m + dir,
      ny = y;
    if (nm < 0) {
      nm = 11;
      ny--;
    } else if (nm > 11) {
      nm = 0;
      ny++;
    }
    setM(nm);
    setY(ny);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: 320,
      padding: 14,
      background: "var(--backgrounds-grouped-primary-elevated)",
      borderRadius: 16,
      fontFamily: "var(--font-system)",
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
      padding: "0 4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: "var(--tint)"
    }
  }, MONTHS[m], " ", y), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => step(-1),
    "aria-label": "Previous",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--tint)",
      cursor: "pointer",
      fontSize: 18,
      padding: 0
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => step(1),
    "aria-label": "Next",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--tint)",
      cursor: "pointer",
      fontSize: 18,
      padding: 0
    }
  }, "\u203A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 2
    }
  }, DOW.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: "center",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--labels-tertiary)",
      padding: "2px 0 6px"
    }
  }, d)), cells.map((d, i) => {
    const isSel = d === selected && m === month && y === year;
    const isToday = d === today && m === month && y === year && !isSel;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      disabled: !d,
      onClick: () => d && onSelect && onSelect(d),
      style: {
        aspectRatio: "1",
        border: "none",
        borderRadius: "50%",
        cursor: d ? "pointer" : "default",
        background: isSel ? "var(--tint)" : "transparent",
        color: isSel ? "var(--tint-on)" : isToday ? "var(--tint)" : d ? "var(--labels-primary)" : "transparent",
        fontFamily: "var(--font-system)",
        fontSize: 17,
        fontWeight: isSel || isToday ? 600 : 400,
        WebkitTapHighlightColor: "transparent"
      }
    }, d || "");
  })));
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pickers/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/pickers/WheelPicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS wheel picker — one or more spinning columns. Static visual recreation:
 * the selected row sits in a centered selection band with items fading above
 * and below. Pass columns of options and the selected index per column.
 */
function WheelPicker({
  columns = [],
  onChange,
  rowHeight = 34,
  visible = 5,
  style = {},
  ...rest
}) {
  const h = rowHeight * visible;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "flex",
      height: h,
      background: "var(--backgrounds-grouped-primary-elevated)",
      borderRadius: 12,
      overflow: "hidden",
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      right: 8,
      top: (h - rowHeight) / 2,
      height: rowHeight,
      borderRadius: 8,
      background: "var(--fills-tertiary)",
      pointerEvents: "none"
    }
  }), columns.map((col, ci) => {
    const sel = col.selected ?? 0;
    return /*#__PURE__*/React.createElement("div", {
      key: ci,
      style: {
        flex: col.flex || 1,
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        transform: `translateY(${(h - rowHeight) / 2 - sel * rowHeight}px)`,
        transition: "transform var(--dur-medium) var(--ease-standard)"
      }
    }, col.options.map((opt, ri) => {
      const dist = Math.abs(ri - sel);
      return /*#__PURE__*/React.createElement("button", {
        key: ri,
        type: "button",
        onClick: () => onChange && onChange(ci, ri),
        style: {
          width: "100%",
          height: rowHeight,
          border: "none",
          background: "transparent",
          fontFamily: "var(--font-system)",
          fontSize: 21,
          fontWeight: dist === 0 ? 600 : 400,
          color: "var(--labels-primary)",
          opacity: dist === 0 ? 1 : Math.max(0.2, 1 - dist * 0.32),
          transform: `scale(${dist === 0 ? 1 : 0.92})`,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: col.align || "center",
          padding: col.align === "flex-start" ? "0 16px" : 0,
          WebkitTapHighlightColor: "transparent"
        }
      }, opt);
    })));
  }));
}
Object.assign(__ds_scope, { WheelPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pickers/WheelPicker.jsx", error: String((e && e.message) || e) }); }

// components/system/Keyboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * iOS iPhone keyboard — QWERTY with shift, delete, numbers toggle, space and
 * return. Light or dark. Tapping a letter key calls onKey; control keys call
 * onShift / onDelete / onReturn / onMode. Visual recreation (no real input).
 */
const ROWS = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["a", "s", "d", "f", "g", "h", "j", "k", "l"], ["z", "x", "c", "v", "b", "n", "m"]];
function Keyboard({
  dark = false,
  shift = false,
  onKey,
  onShift,
  onDelete,
  onReturn,
  onMode,
  returnLabel = "return",
  style = {},
  ...rest
}) {
  const bg = dark ? "rgb(40,40,42)" : "rgb(209,212,217)";
  const keyBg = dark ? "rgb(70,70,72)" : "#fff";
  const ctrlBg = dark ? "rgb(54,54,56)" : "rgb(172,176,184)";
  const txt = dark ? "#fff" : "var(--labels-primary)";
  const Key = ({
    children,
    flex = 1,
    w,
    bgc = keyBg,
    color = txt,
    fs = 22,
    onClick,
    shadow = true
  }) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      flex: w ? "none" : flex,
      width: w,
      height: 42,
      border: "none",
      borderRadius: 6,
      background: bgc,
      color,
      fontFamily: "var(--font-system)",
      fontSize: fs,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: shadow ? "0 1px 0 rgba(0,0,0,0.28)" : "none",
      WebkitTapHighlightColor: "transparent",
      padding: 0
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: bg,
      padding: "8px 3px 6px",
      fontFamily: "var(--font-system)",
      userSelect: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "0 3px 8px",
      justifyContent: "center"
    }
  }, ROWS[0].map(k => /*#__PURE__*/React.createElement(Key, {
    key: k,
    onClick: () => onKey && onKey(shift ? k.toUpperCase() : k)
  }, shift ? k.toUpperCase() : k))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "0 22px 8px",
      justifyContent: "center"
    }
  }, ROWS[1].map(k => /*#__PURE__*/React.createElement(Key, {
    key: k,
    onClick: () => onKey && onKey(shift ? k.toUpperCase() : k)
  }, shift ? k.toUpperCase() : k))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "0 3px 8px",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Key, {
    w: 42,
    bgc: shift ? "#fff" : ctrlBg,
    fs: 18,
    onClick: onShift
  }, "\u21E7"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6
    }
  }), ROWS[2].map(k => /*#__PURE__*/React.createElement(Key, {
    key: k,
    onClick: () => onKey && onKey(shift ? k.toUpperCase() : k)
  }, shift ? k.toUpperCase() : k)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6
    }
  }), /*#__PURE__*/React.createElement(Key, {
    w: 42,
    bgc: ctrlBg,
    fs: 18,
    onClick: onDelete
  }, "\u232B")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "0 3px",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Key, {
    w: 92,
    bgc: ctrlBg,
    fs: 16,
    onClick: onMode
  }, "123"), /*#__PURE__*/React.createElement(Key, {
    onClick: () => onKey && onKey(" "),
    fs: 15
  }, "space"), /*#__PURE__*/React.createElement(Key, {
    w: 92,
    bgc: "var(--tint)",
    color: "#fff",
    fs: 16,
    onClick: onReturn
  }, returnLabel)));
}
Object.assign(__ds_scope, { Keyboard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/system/Keyboard.jsx", error: String((e && e.message) || e) }); }

// components/system/LockScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS lock screen — large clock + date over a wash, an optional notification,
 * and the bottom flashlight / camera glass buttons with a home indicator.
 */
function LockScreen({
  time = "9:41",
  date = "Wednesday, June 24",
  notification,
  background,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      height: "100%",
      minHeight: 520,
      display: "flex",
      flexDirection: "column",
      color: "#fff",
      background: background || "radial-gradient(120% 90% at 50% 0%, #6b4f31, #3a2a18 60%, #1a120b)",
      fontFamily: "var(--font-system)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 52,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 14,
      opacity: 0.85,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, date)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 86,
      fontWeight: 600,
      letterSpacing: "-2px",
      lineHeight: 1
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), notification && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 12px 14px"
    }
  }, notification), children, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 30px 14px"
    }
  }, ["flashlight", "camera"].map((kind, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    style: {
      width: 50,
      height: 50,
      borderRadius: "50%",
      background: "rgba(0,0,0,0.28)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, kind === "flashlight" ? /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 2h8l-1.2 5.2a2 2 0 01-.5 1L11 9.5v6.5a1 1 0 01-2 0V9.5L7.7 8.2a2 2 0 01-.5-1L6 2Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "6",
    width: "17",
    height: "11",
    rx: "3",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11.5",
    r: "3",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6l1.2-2h3.6L14 6",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 134,
      height: 5,
      borderRadius: 3,
      background: "rgba(255,255,255,0.7)"
    }
  })));
}
Object.assign(__ds_scope, { LockScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/system/LockScreen.jsx", error: String((e && e.message) || e) }); }

// components/system/MenuBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * macOS / iPadOS menu bar — a translucent top strip with a leading brand glyph,
 * menu titles, and trailing status items + clock.
 */
function MenuBar({
  brand,
  menus = [],
  status = [],
  clock = "Wed 9:41",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      height: 28,
      padding: "0 12px",
      gap: 2,
      background: "var(--material-thin-fill)",
      backdropFilter: "var(--material-chrome-blur)",
      WebkitBackdropFilter: "var(--material-chrome-blur)",
      borderBottom: "0.5px solid var(--separator)",
      fontFamily: "var(--font-system)",
      fontSize: 13,
      color: "var(--labels-primary)",
      ...style
    }
  }, rest), brand && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      padding: "0 10px 0 4px",
      display: "inline-flex"
    }
  }, brand), menus.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: "3px 9px",
      borderRadius: 5,
      fontWeight: i === 0 ? 600 : 400,
      cursor: "default"
    }
  }, m)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, status.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      opacity: 0.85
    }
  }, s)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, clock)));
}
Object.assign(__ds_scope, { MenuBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/system/MenuBar.jsx", error: String((e && e.message) || e) }); }

// components/system/StatusBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** iOS status bar — time + signal / wifi / battery, in light or dark content. */
function StatusBar({
  time = "9:41",
  dark = false,
  style = {},
  ...rest
}) {
  const c = dark ? "#fff" : "var(--labels-primary)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      fontFamily: "var(--font-system)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: c,
      letterSpacing: "-0.2px"
    }
  }, time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "12",
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      color: c
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: i * 4.5,
    y: 9 - i * 3,
    width: "3",
    height: 3 + i * 3,
    rx: "1",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    style: {
      color: c
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 10.5a1.3 1.3 0 100-2.6 1.3 1.3 0 000 2.6Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5.5a7 7 0 0110 0M5.2 7.7a4 4 0 015.6 0",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "13",
    viewBox: "0 0 26 13",
    fill: "none",
    style: {
      color: c
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1.5",
    width: "21",
    height: "10",
    rx: "3",
    stroke: "currentColor",
    strokeOpacity: "0.4",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "3",
    width: "16",
    height: "7",
    rx: "1.8",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "23.5",
    y: "4.5",
    width: "1.6",
    height: "4",
    rx: "0.8",
    fill: "currentColor",
    fillOpacity: "0.5"
  }))));
}
Object.assign(__ds_scope, { StatusBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/system/StatusBar.jsx", error: String((e && e.message) || e) }); }

// components/system/Widget.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * iOS home-screen widget container — a rounded squircle tile with a soft
 * shadow. Sizes: small (1×1), medium (2×1), large (2×2). Provide your own
 * content; an optional header (icon + app name) can be shown.
 */
function Widget({
  size = "small",
  appName,
  appIcon,
  accent,
  children,
  style = {},
  ...rest
}) {
  const dims = {
    small: {
      w: 158,
      h: 158
    },
    medium: {
      w: 338,
      h: 158
    },
    large: {
      w: 338,
      h: 338
    }
  };
  const d = dims[size] || dims.small;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: d.w,
      height: d.h,
      borderRadius: 26,
      background: accent || "var(--backgrounds-grouped-secondary-elevated)",
      boxShadow: "var(--shadow-card)",
      padding: 16,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: "var(--font-system)",
      position: "relative",
      ...style
    }
  }, rest), (appName || appIcon) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      marginBottom: 10
    }
  }, appIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 6,
      background: "var(--trinity-brown)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12
    }
  }, appIcon), appName && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: accent ? "rgba(255,255,255,0.85)" : "var(--labels-secondary)",
      textTransform: "uppercase",
      letterSpacing: "0.3px"
    }
  }, appName)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Widget });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/system/Widget.jsx", error: String((e && e.message) || e) }); }

// components/system/Window.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * macOS window chrome — traffic-light controls, an optional centered title,
 * a translucent toolbar area and a content slot. Use for desktop / iPadOS
 * windowed recreations.
 */
function Window({
  title,
  toolbar,
  children,
  width = 720,
  height,
  active = true,
  material = true,
  style = {},
  ...rest
}) {
  const dot = c => ({
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: active ? c : "var(--miscellaneous-window-controls-bg-inactive)"
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height,
      borderRadius: 12,
      overflow: "hidden",
      background: "var(--backgrounds-primary)",
      boxShadow: "0 24px 70px rgba(0,0,0,0.30), 0 0 0 0.5px rgba(0,0,0,0.18)",
      fontFamily: "var(--font-system)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 14px",
      position: "relative",
      flex: "none",
      background: material ? "var(--material-thin-fill)" : "var(--backgrounds-secondary)",
      backdropFilter: material ? "var(--material-chrome-blur)" : "none",
      WebkitBackdropFilter: material ? "var(--material-chrome-blur)" : "none",
      borderBottom: "0.5px solid var(--separator)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: dot("var(--miscellaneous-window-controls-close)")
  }), /*#__PURE__*/React.createElement("span", {
    style: dot("var(--miscellaneous-window-controls-minimize)")
  }), /*#__PURE__*/React.createElement("span", {
    style: dot("var(--miscellaneous-window-controls-maximize)")
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--labels-secondary)",
      pointerEvents: "none"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8,
      zIndex: 1
    }
  }, toolbar)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: "auto"
    }
  }, children));
}
Object.assign(__ds_scope, { Window });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/system/Window.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trinity-app/app.jsx
try { (() => {
/* TRINITY ONE app — phone frame + navigation state. */
const DS_ = window.TRINITYONEDesignSystem_9e0a2b;
const {
  I: Ico,
  refreshIcons: refresh,
  HomeIndicator: HI
} = window.TrinityKit;
const {
  LoginScreen,
  Dashboard,
  HoldingDetail,
  Documents,
  Settings
} = window.TrinityScreens;
function App() {
  const [locked, setLocked] = React.useState(true);
  const [tab, setTab] = React.useState("home");
  const [holding, setHolding] = React.useState(false);
  const [sheet, setSheet] = React.useState(false);
  const [banner, setBanner] = React.useState(false);
  React.useEffect(() => {
    refresh();
  });
  let screen;
  if (locked) screen = /*#__PURE__*/React.createElement(LoginScreen, {
    onUnlock: () => {
      setLocked(false);
      setBanner(true);
      setTimeout(() => setBanner(false), 3600);
    }
  });else if (tab === "home") screen = holding ? /*#__PURE__*/React.createElement(HoldingDetail, {
    onBack: () => setHolding(false),
    onAct: () => setSheet(true)
  }) : /*#__PURE__*/React.createElement(Dashboard, {
    onOpenHolding: () => setHolding(true)
  });else if (tab === "docs") screen = /*#__PURE__*/React.createElement(Documents, null);else if (tab === "me") screen = /*#__PURE__*/React.createElement(Settings, {
    onSignOut: () => {
      setLocked(true);
      setTab("home");
      setHolding(false);
    }
  });
  const TABS = [{
    key: "home",
    label: "Portfolio",
    icon: /*#__PURE__*/React.createElement(Ico, {
      n: "chart-pie"
    })
  }, {
    key: "docs",
    label: "Documents",
    icon: /*#__PURE__*/React.createElement(Ico, {
      n: "folder"
    })
  }, {
    key: "me",
    label: "Profile",
    icon: /*#__PURE__*/React.createElement(Ico, {
      n: "user"
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 28,
      background: "radial-gradient(120% 120% at 50% 0%, #efe9e1, #e2d8cb)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      height: 844,
      borderRadius: 56,
      padding: 12,
      background: "#1a1a1c",
      boxShadow: "0 50px 100px rgba(60,40,20,0.35), 0 0 0 2px rgba(0,0,0,0.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: 45,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 11,
      left: "50%",
      transform: "translateX(-50%)",
      width: 124,
      height: 36,
      background: "#000",
      borderRadius: 20,
      zIndex: 40
    }
  }), screen, !locked && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 26,
      display: "flex",
      justifyContent: "center",
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(DS_.TabBar, {
    active: tab,
    onChange: k => {
      setTab(k);
      setHolding(false);
    },
    items: TABS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 31
    }
  }, /*#__PURE__*/React.createElement(HI, null))), banner && !locked && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 60,
      left: 10,
      right: 10,
      zIndex: 60,
      animation: "to-drop 0.4s var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(DS_.NotificationBanner, {
    appName: "TRINITY ONE",
    title: "Welcome back, Ha-eun",
    message: "Your Balanced mandate is up 14.2% YTD.",
    time: "now"
  })), sheet && /*#__PURE__*/React.createElement(DS_.ActionSheet, {
    title: "Aurelius PE Fund IV",
    actions: [{
      label: "Download capital account"
    }, {
      label: "Message advisor"
    }, {
      label: "Request redemption",
      destructive: true
    }],
    onCancel: () => setSheet(false)
  }))), /*#__PURE__*/React.createElement("style", null, `@keyframes to-drop { from { transform: translateY(-30px); opacity: 0 } to { transform: none; opacity: 1 } }`));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
refresh();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trinity-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trinity-app/screens.jsx
try { (() => {
/* TRINITY ONE screens — composed from the DS primitives + shell helpers. */
const DS = window.TRINITYONEDesignSystem_9e0a2b;
const {
  I,
  refreshIcons,
  StatusBar,
  HomeIndicator,
  Donut,
  Sparkline
} = window.TrinityKit;
const {
  useState,
  useEffect
} = React;
const BROWN = "var(--trinity-brown)";
const money = n => "$" + n.toLocaleString("en-US");
const ALLOC = [{
  label: "Private Equity",
  pct: 34,
  color: "#7A5C3A"
}, {
  label: "Fixed Income",
  pct: 26,
  color: "#AC7F5E"
}, {
  label: "Public Equity",
  pct: 22,
  color: "#C9A227"
}, {
  label: "Real Assets",
  pct: 12,
  color: "#5A4228"
}, {
  label: "Cash",
  pct: 6,
  color: "#D8C4AC"
}];
const SERIES = [41.2, 41.0, 42.1, 41.8, 43.4, 44.0, 43.2, 45.1, 46.3, 45.9, 47.2, 48.2];

/* ============ LOGIN ============ */
function LoginScreen({
  onUnlock
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      color: "#fff",
      background: "radial-gradient(120% 80% at 50% 0%, #6b4f31 0%, #4a371f 55%, #2a1f14 100%)"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 32,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/trinity-one-logo-stacked.png",
    alt: "TRINITY ONE",
    style: {
      width: 132,
      filter: "brightness(0) invert(1)",
      opacity: 0.96
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      fontSize: 13,
      letterSpacing: "3px",
      textTransform: "uppercase",
      opacity: 0.7
    }
  }, "Private Wealth")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 28px 18px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onUnlock,
    "aria-label": "Face ID",
    style: {
      width: 64,
      height: 64,
      borderRadius: 18,
      border: "none",
      cursor: "pointer",
      background: "rgba(255,255,255,0.12)",
      backdropFilter: "blur(12px)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "scan-face",
    s: 32
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      opacity: 0.85
    }
  }, "Tap to unlock with Face ID"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "glass",
    shape: "capsule",
    size: "large",
    fullWidth: true,
    onClick: onUnlock
  }, "Use passcode")), /*#__PURE__*/React.createElement(HomeIndicator, {
    dark: true
  }));
}

/* ============ DASHBOARD ============ */
function Dashboard({
  onOpenHolding
}) {
  const [range, setRange] = useState("1Y");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--backgrounds-grouped-primary)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(DS.NavBar, {
    largeTitle: true,
    title: "Portfolio",
    subtitle: "Total net worth",
    leading: /*#__PURE__*/React.createElement(DS.Avatar, {
      name: "Trinity One",
      size: 32,
      square: true
    }),
    trailing: /*#__PURE__*/React.createElement(DS.IconButton, {
      variant: "gray",
      label: "alerts"
    }, /*#__PURE__*/React.createElement(I, {
      n: "bell"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 16px 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: "-1px"
    }
  }, money(48234901))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(DS.Badge, {
    variant: "positive"
  }, "\u25B2 14.2%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, "+", money(5984120), " this year")), /*#__PURE__*/React.createElement(DS.Card, {
    variant: "grouped",
    padding: 14,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    points: SERIES
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(DS.Segmented, {
    size: "small",
    segments: ["1M", "3M", "6M", "1Y", "All"],
    value: range,
    onChange: setRange
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: "20px 2px 10px"
    }
  }, "Allocation"), /*#__PURE__*/React.createElement(DS.Card, {
    variant: "grouped",
    padding: 16,
    style: {
      display: "flex",
      gap: 18,
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    segments: ALLOC,
    size: 132,
    thickness: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-tertiary)"
    }
  }, "Mandate"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Balanced"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, ALLOC.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 3,
      background: a.color,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      flex: 1,
      color: "var(--text-secondary)"
    }
  }, a.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      fontVariantNumeric: "tabular-nums"
    }
  }, a.pct, "%"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: "20px 2px 10px"
    }
  }, "Top holdings"), /*#__PURE__*/React.createElement(DS.ListGroup, null, /*#__PURE__*/React.createElement(DS.ListRow, {
    leading: /*#__PURE__*/React.createElement(I, {
      n: "building-2",
      s: 16
    }),
    iconBg: "#7A5C3A",
    title: "Aurelius PE Fund IV",
    subtitle: "Private equity",
    value: "$16.4M",
    chevron: true,
    onClick: onOpenHolding
  }), /*#__PURE__*/React.createElement(DS.ListRow, {
    leading: /*#__PURE__*/React.createElement(I, {
      n: "landmark",
      s: 16
    }),
    iconBg: "#AC7F5E",
    title: "US Treasuries 10Y",
    subtitle: "Fixed income",
    value: "$12.5M",
    chevron: true,
    onClick: onOpenHolding
  }), /*#__PURE__*/React.createElement(DS.ListRow, {
    leading: /*#__PURE__*/React.createElement(I, {
      n: "trending-up",
      s: 16
    }),
    iconBg: "#C9A227",
    title: "Global Equity Index",
    subtitle: "Public equity",
    value: "$10.6M",
    chevron: true,
    onClick: onOpenHolding
  }))));
}

/* ============ HOLDING DETAIL ============ */
function HoldingDetail({
  onBack,
  onAct
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--backgrounds-grouped-primary)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(DS.NavBar, {
    title: "Aurelius PE Fund IV",
    subtitle: "Private equity",
    leading: /*#__PURE__*/React.createElement(DS.Button, {
      variant: "plain",
      icon: /*#__PURE__*/React.createElement(I, {
        n: "chevron-left",
        s: 20
      }),
      onClick: onBack,
      style: {
        paddingLeft: 4
      }
    }, "Portfolio"),
    trailing: /*#__PURE__*/React.createElement(DS.IconButton, {
      variant: "gray",
      label: "more",
      onClick: onAct
    }, /*#__PURE__*/React.createElement(I, {
      n: "ellipsis"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "12px 16px 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "8px 0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: "-1px"
    }
  }, money(16420000)), /*#__PURE__*/React.createElement(DS.Badge, {
    variant: "positive",
    style: {
      marginTop: 6
    }
  }, "\u25B2 21.8% IRR")), /*#__PURE__*/React.createElement(DS.Card, {
    variant: "grouped",
    padding: 14,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    points: [10, 10.6, 11.4, 12, 13.1, 13.8, 14.9, 15.4, 16.4],
    color: "#7A5C3A"
  })), /*#__PURE__*/React.createElement(DS.ListGroup, {
    header: "Position"
  }, /*#__PURE__*/React.createElement(DS.ListRow, {
    title: "Committed",
    value: "$20.0M"
  }), /*#__PURE__*/React.createElement(DS.ListRow, {
    title: "Called",
    value: "$14.0M"
  }), /*#__PURE__*/React.createElement(DS.ListRow, {
    title: "Distributed",
    value: "$4.2M"
  }), /*#__PURE__*/React.createElement(DS.ListRow, {
    title: "Vintage",
    value: "2021"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(DS.ListGroup, {
    header: "Documents"
  }, /*#__PURE__*/React.createElement(DS.ListRow, {
    leading: /*#__PURE__*/React.createElement(I, {
      n: "file-text",
      s: 16
    }),
    iconBg: "var(--accents-red)",
    title: "Q2 Capital Account",
    value: "PDF",
    chevron: true
  }), /*#__PURE__*/React.createElement(DS.ListRow, {
    leading: /*#__PURE__*/React.createElement(I, {
      n: "file-text",
      s: 16
    }),
    iconBg: "var(--accents-red)",
    title: "Capital Call Notice",
    value: "PDF",
    chevron: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "tinted",
    fullWidth: true,
    icon: /*#__PURE__*/React.createElement(I, {
      n: "message-circle",
      s: 17
    })
  }, "Message advisor"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "filled",
    fullWidth: true,
    onClick: onAct
  }, "Manage"))));
}

/* ============ DOCUMENTS ============ */
function Documents() {
  const docs = [{
    t: "Q2 2026 Statement",
    s: "Jun 30 · 14 pages",
    c: "var(--accents-red)"
  }, {
    t: "Capital Call — Aurelius IV",
    s: "Jun 18 · Action required",
    c: "var(--accents-orange)"
  }, {
    t: "Tax Package 2025",
    s: "Apr 2 · Final",
    c: "var(--accents-green)"
  }, {
    t: "Investment Policy Statement",
    s: "Jan 12 · Signed",
    c: BROWN
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--backgrounds-grouped-primary)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(DS.NavBar, {
    largeTitle: true,
    title: "Documents"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 10px"
    }
  }, /*#__PURE__*/React.createElement(DS.TextField, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "search",
      s: 17
    }),
    placeholder: "Search documents"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "6px 16px 120px"
    }
  }, /*#__PURE__*/React.createElement(DS.ListGroup, null, docs.map((d, i) => /*#__PURE__*/React.createElement(DS.ListRow, {
    key: i,
    leading: /*#__PURE__*/React.createElement(I, {
      n: "file-text",
      s: 16
    }),
    iconBg: d.c,
    title: d.t,
    subtitle: d.s,
    chevron: true
  })))));
}

/* ============ SETTINGS ============ */
function Settings({
  onSignOut
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--backgrounds-grouped-primary)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(DS.NavBar, {
    largeTitle: true,
    title: "Profile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 16px 120px"
    }
  }, /*#__PURE__*/React.createElement(DS.Card, {
    variant: "grouped",
    padding: 16,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(DS.Avatar, {
    name: "Ha Eun",
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, "Ha-eun Kang"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "Member since 2019 \xB7 Private")), /*#__PURE__*/React.createElement(DS.IconButton, {
    variant: "gray",
    label: "edit"
  }, /*#__PURE__*/React.createElement(I, {
    n: "pencil",
    s: 16
  }))), /*#__PURE__*/React.createElement(DS.ListGroup, {
    header: "Security"
  }, /*#__PURE__*/React.createElement(DS.ListRow, {
    leading: /*#__PURE__*/React.createElement(I, {
      n: "scan-face",
      s: 16
    }),
    iconBg: "var(--accents-green)",
    title: "Face ID",
    trailing: /*#__PURE__*/React.createElement(DS.Toggle, {
      defaultChecked: true
    })
  }), /*#__PURE__*/React.createElement(DS.ListRow, {
    leading: /*#__PURE__*/React.createElement(I, {
      n: "lock",
      s: 16
    }),
    iconBg: "var(--grays-gray)",
    title: "Private mode",
    trailing: /*#__PURE__*/React.createElement(DS.Toggle, {
      defaultChecked: true,
      tint: "var(--tint)"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(DS.ListGroup, {
    header: "Advisory",
    footer: "Your dedicated strategist reviews every mandate change."
  }, /*#__PURE__*/React.createElement(DS.ListRow, {
    leading: /*#__PURE__*/React.createElement(I, {
      n: "user-round",
      s: 16
    }),
    iconBg: BROWN,
    title: "Your strategist",
    value: "J. Pemberton",
    chevron: true
  }), /*#__PURE__*/React.createElement(DS.ListRow, {
    leading: /*#__PURE__*/React.createElement(I, {
      n: "calendar",
      s: 16
    }),
    iconBg: "var(--accents-blue)",
    title: "Book a review",
    chevron: true
  }), /*#__PURE__*/React.createElement(DS.ListRow, {
    leading: /*#__PURE__*/React.createElement(I, {
      n: "bell",
      s: 16
    }),
    iconBg: "var(--accents-red)",
    title: "Notifications",
    trailing: /*#__PURE__*/React.createElement(DS.Badge, {
      variant: "count"
    }, "2"),
    chevron: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(DS.ListGroup, null, /*#__PURE__*/React.createElement(DS.ListRow, {
    title: "Sign out",
    destructive: true,
    onClick: onSignOut
  }))));
}
window.TrinityScreens = {
  LoginScreen,
  Dashboard,
  HoldingDetail,
  Documents,
  Settings
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trinity-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trinity-app/shell.jsx
try { (() => {
/* TRINITY ONE — iOS app UI kit.
   App shell + screens, composed from the design-system primitives on
   window.TRINITYONEDesignSystem_9e0a2b. Exposes <App/> on window for index.html. */
const {
  Button,
  IconButton,
  Badge,
  Avatar,
  Card,
  TextField,
  Segmented,
  Toggle,
  Slider,
  Stepper,
  NavBar,
  TabBar,
  ListGroup,
  ListRow,
  Alert,
  ActionSheet,
  NotificationBanner,
  ProgressBar,
  Spinner
} = window.TRINITYONEDesignSystem_9e0a2b;
const {
  useState
} = React;
const I = ({
  n,
  s = 18,
  c
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: {
    width: s,
    height: s,
    color: c
  }
});
const refreshIcons = () => setTimeout(() => window.lucide && window.lucide.createIcons(), 30);

/* ---------- shared chrome ---------- */
function StatusBar({
  dark = false
}) {
  const c = dark ? "#fff" : "var(--labels-primary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 54,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      padding: "0 26px 8px",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: c,
      letterSpacing: "-0.2px"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      color: c
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "signal",
    s: 16
  }), /*#__PURE__*/React.createElement(I, {
    n: "wifi",
    s: 16
  }), /*#__PURE__*/React.createElement(I, {
    n: "battery-full",
    s: 18
  })));
}
const HomeIndicator = ({
  dark
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "none"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 134,
    height: 5,
    borderRadius: 3,
    background: dark ? "rgba(255,255,255,0.5)" : "var(--labels-primary)"
  }
}));
function Donut({
  segments,
  size = 168,
  thickness = 26
}) {
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      transform: "rotate(-90deg)"
    }
  }, segments.map((s, i) => {
    const len = s.pct / 100 * circ;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: s.color,
      strokeWidth: thickness,
      strokeDasharray: `${len} ${circ - len}`,
      strokeDashoffset: -offset,
      strokeLinecap: "butt"
    });
    offset += len;
    return el;
  }));
}
function Sparkline({
  points,
  color = "var(--accents-green)",
  w = 300,
  h = 84
}) {
  const max = Math.max(...points),
    min = Math.min(...points);
  const path = points.map((p, i) => {
    const x = i / (points.length - 1) * w;
    const y = h - (p - min) / (max - min || 1) * (h - 8) - 4;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: h,
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: `${path} L${w} ${h} L0 ${h} Z`,
    fill: color,
    opacity: "0.10"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
window.TrinityKit = {
  I,
  refreshIcons,
  StatusBar,
  HomeIndicator,
  Donut,
  Sparkline
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trinity-app/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ActionSheet = __ds_scope.ActionSheet;

__ds_ns.ActivityView = __ds_scope.ActivityView;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.NotificationBanner = __ds_scope.NotificationBanner;

__ds_ns.NotificationStack = __ds_scope.NotificationStack;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.SelectMenu = __ds_scope.SelectMenu;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.PageControl = __ds_scope.PageControl;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.ListGroup = __ds_scope.ListGroup;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Toolbar = __ds_scope.Toolbar;

__ds_ns.ToolbarSpacer = __ds_scope.ToolbarSpacer;

__ds_ns.ContextMenuPreview = __ds_scope.ContextMenuPreview;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.ColorPicker = __ds_scope.ColorPicker;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.WheelPicker = __ds_scope.WheelPicker;

__ds_ns.Keyboard = __ds_scope.Keyboard;

__ds_ns.LockScreen = __ds_scope.LockScreen;

__ds_ns.MenuBar = __ds_scope.MenuBar;

__ds_ns.StatusBar = __ds_scope.StatusBar;

__ds_ns.Widget = __ds_scope.Widget;

__ds_ns.Window = __ds_scope.Window;

})();
