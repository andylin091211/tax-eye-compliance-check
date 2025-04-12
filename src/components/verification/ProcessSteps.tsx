
const ProcessSteps = () => {
  const steps = [
    { id: 1, label: "手工下载数据" },
    { id: 2, label: "数据导入" },
    { id: 3, label: "匹配：自动核销/人工标识核销" },
    { id: 4, label: "详细核销记录" },
    { id: 5, label: "风险仪表板" },
  ];

  return (
    <div className="mb-8 mt-2">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="process-step">
            <div className="step-circle">{step.id}</div>
            <div className="step-text">{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
